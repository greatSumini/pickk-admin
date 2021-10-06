import {ApolloCache, gql, useMutation} from '@apollo/client';
import {
  Mutation,
  MutationBulkUpdateItemsArgs,
  MutationUpdateItemArgs,
  UpdateItemInput,
} from '@pickk/common';

export const useUpdateItem = () => {
  const [updateItem] = useMutation<unknown, MutationUpdateItemArgs>(gql`
    mutation UpdateItem($itemId: Int!, $updateItemInput: UpdateItemInput!) {
      updateItem(itemId: $itemId, updateItemInput: $updateItemInput) {
        id
        name
        imageUrl
        description
        isInfiniteStock
        majorCategoryId
        majorCategory {
          id
          name
        }
        minorCategoryId
        minorCategory {
          id
          name
        }
      }
    }
  `);

  const updateCategoryCache =
    (itemId: number, updateItemInput: UpdateItemInput) =>
    (cache: ApolloCache<unknown>) => {
      const {majorCategoryId, minorCategoryId} = updateItemInput;
      cache.modify({
        id: `Item:${itemId}`,
        fields: {
          majorCategory: () => ({
            __ref: `ItemCategory:${majorCategoryId}`,
          }),
          minorCategory: () => ({
            __ref: `ItemCategory:${minorCategoryId}`,
          }),
        },
      });
    };

  return {updateItem, updateCategoryCache};
};

export const useBulkUpdateItems = () =>
  useMutation<
    Pick<Mutation, 'bulkUpdateItems'>,
    MutationBulkUpdateItemsArgs
  >(gql`
    mutation BulkUpdateItems(
      $bulkUpdateItemInput: BulkUpdateItemInput!
      $ids: [Int!]!
    ) {
      bulkUpdateItems(bulkUpdateItemInput: $bulkUpdateItemInput, ids: $ids)
    }
  `);
