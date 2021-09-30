import {message} from 'antd';

import {TableActionType} from '@src/components/common/organisms/Board/Table/table';
import {useBulkUpdateItems} from '@src/common/hooks/apis';

const handleSetIsSellable =
  (isSellable: boolean): TableActionType['onClick'] =>
  async (ids, mutate) => {
    const isSellableText = isSellable ? '활성화' : '비활성화';
    try {
      if (confirm(`상품을 ${isSellableText} 하시겠습니까?`)) {
        await mutate({
          variables: {
            bulkUpdateItemInput: {
              isSellable,
            },
            ids,
          },
        });
      }
    } catch (err) {
      message.error('실패했습니다. err - ' + err);
    }
  };

export const itemActions: TableActionType[] = [
  {
    text: '상품 활성화',
    onClick: handleSetIsSellable(true),
    useTableAction: useBulkUpdateItems,
  },
  {
    text: '상품 비활성화',
    onClick: handleSetIsSellable(false),
    useTableAction: useBulkUpdateItems,
  },
  // @TODO 추후 구현
  // {
  //   text: '상품 삭제',
  //   onClick: async (ids: number[]) => null,
  // },
];
