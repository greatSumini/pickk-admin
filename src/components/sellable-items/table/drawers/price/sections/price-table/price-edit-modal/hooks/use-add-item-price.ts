import {gql, useMutation} from '@apollo/client';
import {
  AddItemPriceInput,
  Mutation,
  MutationAddItemPriceArgs,
} from '@pickk/common';

const ADD_ITEM_PRICE = gql`
  mutation AddItemPrice($itemId: Int!, $addItemPriceInput: AddItemPriceInput!) {
    addItemPrice(itemId: $itemId, addItemPriceInput: $addItemPriceInput) {
      id
      prices {
        id
        startAt
        endAt
        originalPrice
        sellPrice
        isActive
      }
    }
  }
`;

export const useAddItemPrice = () => {
  const [add] = useMutation<
    Pick<Mutation, 'addItemPrice'>,
    MutationAddItemPriceArgs
  >(ADD_ITEM_PRICE);

  const addItemPrice = async (
    itemId: number,
    addItemPriceInput: AddItemPriceInput,
  ) => {
    console.log('addItemPrice', itemId, addItemPriceInput);
    await add({
      variables: {
        itemId,
        addItemPriceInput,
      },
    });
  };

  return {addItemPrice};
};