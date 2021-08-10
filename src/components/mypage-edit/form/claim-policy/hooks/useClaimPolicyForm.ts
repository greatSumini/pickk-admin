import {gql, useQuery} from '@apollo/client';
import {
  SellerReturnAddress,
  SellerClaimAccount,
  SellerClaimPolicy,
  BankCode,
  ClaimFeePayMethod,
  Query,
} from '@pickk/common';

import {SELLER_CLAIM_ACCOUNT_FRAGMENT} from '@src/common/graphql';

export const SELLER_RETURN_ADDRESS_FRAGMENT = gql`
  fragment SellerReturnAddressFragment on SellerReturnAddress {
    id
    baseAddress
    detailAddress
    postalCode
  }
`;

export const SELLER_CLAIM_POLICY_FRAGMENT = gql`
  fragment SellerClaimPolicyFragment on SellerClaimPolicy {
    id
    picName
    phoneNumber
    fee
    feePayMethod
    account {
      ...SellerClaimAccountFragment
    }
  }
  ${SELLER_CLAIM_ACCOUNT_FRAGMENT}
`;

const GET_ME_SELLER_CLAIM_POLICY = gql`
  query MeSeller {
    meSeller {
      id
      returnAddress {
        ...SellerReturnAddressFragment
      }
      claimPolicy {
        ...SellerClaimPolicyFragment
      }
    }
  }
  ${SELLER_RETURN_ADDRESS_FRAGMENT}
  ${SELLER_CLAIM_POLICY_FRAGMENT}
`;

export type ClaimPolicyFormDefaultValue = {
  returnAddress: Pick<
    SellerReturnAddress,
    'baseAddress' | 'detailAddress' | 'postalCode'
  >;
  feePayReceive: {
    feePayMethod: ClaimFeePayMethod;
    accountInput: Pick<SellerClaimAccount, 'bankCode' | 'number' | 'ownerName'>;
  };
} & SellerClaimPolicy;

export const useClaimPolicyForm = () => {
  const {data} = useQuery<Pick<Query, 'meSeller'>>(GET_ME_SELLER_CLAIM_POLICY);

  const {
    baseAddress = '',
    detailAddress = '',
    postalCode = '',
  } = data?.meSeller?.returnAddress || {};

  const {
    bankCode = BankCode.AbnAmro,
    number = '',
    ownerName = '',
  } = data?.meSeller?.claimPolicy?.account || {};

  const defaultValue: ClaimPolicyFormDefaultValue = {
    returnAddress: {
      baseAddress,
      detailAddress,
      postalCode,
    },
    ...data?.meSeller?.claimPolicy,
    feePayReceive: {
      feePayMethod: data?.meSeller?.claimPolicy?.feePayMethod,
      accountInput: {
        bankCode,
        number,
        ownerName,
      },
    },
  };

  return {data, defaultValue};
};