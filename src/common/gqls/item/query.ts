import {gql} from '@apollo/client';

import {ITEM_OPTION_FARG, ITEM_PRICE_FRAG, PRODUCT_FRAG} from './fragment';

export const ITEMS_QUERY = gql`
  query Items($itemFilter: ItemFilter, $pageInput: PageInput) {
    items(itemFilter: $itemFilter, pageInput: $pageInput) {
      id
      imageUrl
      majorCategory {
        id
        name
      }
      minorCategory {
        id
        name
      }
      name
      originalPrice
      sellPrice
      finalPrice
      prices {
        ...ItemPriceFrag
      }
      products {
        ...ProductFrag
      }
      isInfiniteStock
      isSoldout
      notice {
        id
        type
        message
        startAt
        endAt
      }
      options {
        ...ItemOptionFrag
      }
      isMdRecommended
      isSellable
      urls {
        isPrimary
        url
      }
      createdAt
    }
  }
  ${ITEM_PRICE_FRAG}
  ${PRODUCT_FRAG}
  ${ITEM_OPTION_FARG}
`;