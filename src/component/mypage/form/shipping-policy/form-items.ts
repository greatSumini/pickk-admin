import ShippingFeeInput from './fee-input';

import {BaseFormProps} from '../../../../components/organisms/Form/base';

export const FORM_ITEMS: BaseFormProps['FORM_ITEMS'] = {
  shippingPolicy: {
    label: '무료배송',
    CustomInput: ShippingFeeInput,
    rules: [
      {
        required: true,
        message: '무료배송 최소주문금액을 입력해주세요.',
      },
    ],
  },
};
