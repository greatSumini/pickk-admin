import Filter from '@src/components/organisms/Board/Filter';
import Table from '@src/components/organisms/Board/Table';
import Space from '@src/components/atoms/space';

import {settlementInputs} from './inputs';
import {settlementColumns} from './table';
import {BoardProps} from '../props';

import {parseTable} from './table/data-parser';

import {useSettlementTable} from '@src/hooks/table/Settlement';

import {withBoardContext} from '@src/contexts/Board';

function SettlementBoard({title}: BoardProps) {
  return (
    <>
      <Space level={2} />
      <Filter title={title} inputs={settlementInputs} />
      <Space level={2} />
      <Table title={title} columns={settlementColumns} />
    </>
  );
}

export default withBoardContext(
  SettlementBoard,
  {
    expected: null,
    settleStatus: null,
  },
  useSettlementTable,
  parseTable,
);