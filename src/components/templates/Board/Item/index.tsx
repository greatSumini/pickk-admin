import {useState} from 'react';
import styled from 'styled-components';

import {getBoardModelByName} from '@src/models/board';
import {addCommaToNumber} from '@src/lib/NumberParser';
import Filter, {BoardFilterProps} from '../../../organisms/Board/Filter';
import Table, {BoardTableProps} from '../../../organisms/Board/Table';
import Space from '../../../atoms/space';

import {withBoardContext} from '@src/contexts/Board';
import {useItemTable} from '@src/hooks/table/Item';
import InputBox from '@src/components/molecules/BoardFilter/input/InputBox';
import moment from 'moment';
import Datepicker from '@src/components/molecules/BoardFilter/input/DatePicker';

export type BoardProps = {
  name: string;
};

function ItemBoard(props: BoardProps) {
  const inputs = [
    {
      name: 'name',
      defaultValue: {
        query: '',
      },
      labelText: '상품명',
      Component: InputBox,
    },
    {
      name: 'period',

      defaultValue: {
        type: 'all',
        startDate: moment()
          .subtract(1, 'months')
          .format('YYYY-MM-DD'),
        endDate: moment().format('YYYY-MM-DD'),
      },
      labelText: '조회기간',
      select: [
        {name: '전체', value: 'all'},
        {name: '상품등록일', value: 'registerProductDate'},
        {name: '판매시작일', value: 'startSellingDate'},
        {name: '판매종료일', value: 'endSellingDate'},
      ],
      Component: Datepicker,
    },
  ];

  return (
    <>
      <Filter title="" inputs={inputs} />
      <Space level={2} />
      <Table />
      <Space level={2} />
    </>
  );
}

export default withBoardContext(ItemBoard, {name: ''}, useItemTable);