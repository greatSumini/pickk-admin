import {Collapse, Drawer, DrawerProps, Space} from 'antd';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import {Item} from '@pickk/common';

import ItemBaseInfoEditSection from './base';
import {useBaseItemInfo} from './hooks/use-base-item-info';

export type ItemInfoEditDrawerProps = Pick<
  DrawerProps,
  'visible' | 'onClose'
> & {
  itemId: number;
};

export default function ItemInfoManageDrawer({
  visible,
  onClose,
  itemId,
}: ItemInfoEditDrawerProps) {
  const {data: item} = useBaseItemInfo(itemId);

  return (
    <Drawer title="정보 수정" visible={visible} onClose={onClose} width={'50%'}>
      <Space direction="vertical" style={{width: '100%'}} size="small">
        <Collapse defaultActiveKey="1">
          <CollapsePanel key="1" header="상품 기본 정보 수정">
            {item && <ItemBaseInfoEditSection selectedItem={item as Item} />}
          </CollapsePanel>
        </Collapse>
      </Space>
    </Drawer>
  );
}
