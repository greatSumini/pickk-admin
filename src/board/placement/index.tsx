import Filter from '@src/components/organisms/Board/Filter';
import Table from '@src/components/organisms/Board/Table';
import Space from '@src/components/atoms/space';

import {itemInputs} from './inputs';
import {itemColumns} from './table/columns';
import PlacementPreview from './preview';
import {BoardProps} from '../props';

import {withBoardContext} from '@src/contexts/Board';
import {useItemTable} from '@src/hooks/table/Item';

function PlacementBoard({title}: BoardProps) {
  return (
    <>
      <PlacementPreview />
      <Space level={2} />
      <Filter title={title} inputs={itemInputs} />
      <Space level={2} />
      <Table title={title} columns={itemColumns} />
    </>
  );
}

export default withBoardContext(PlacementBoard, {name: ''}, useItemTable);