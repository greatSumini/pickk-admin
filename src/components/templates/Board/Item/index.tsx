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
import CheckBox from '@src/components/molecules/BoardFilter/input/CheckBox';

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
      name: 'isReviewed',
      defaultValue: {
        query: '',
      },
      labelText: '리뷰 필터링',
      guideText: '리뷰가 있는 상품만 필터링하여 볼 수 있는 기능입니다.',
      Component: CheckBox,
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
