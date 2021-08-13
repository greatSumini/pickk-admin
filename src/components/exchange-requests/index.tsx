import {message} from 'antd';
import {useState} from 'react';
import {ExchangeRequestStatus} from '@pickk/common';

import Header from '@src/components/common/organisms/Board/Header';
import Preview from '@src/components/common/organisms/Board/preview';
import Filter from '@src/components/common/organisms/Board/Filter';
import Table from '@src/components/common/organisms/Board/Table';
import ShipModal from '../placement/table/modal/ship';

import {useBoardContext} from '@src/common/contexts/Board';
import {TableActionType} from '../common/organisms/Board/Table/table';
import {BoardProps} from '../props';

import {
  useBulkPickMeSellerExchangeRequests,
  useMeSellerExchangeRequestsCount,
} from './hooks';

import {exchangeRequestPreviewData} from './preview-data';
import {exchangeRequestInputs} from './inputs';
import {exchangeRequestColumns, exchangeRequestActions} from './table';

function ExchangeRequestsBoard(props: BoardProps) {
  const {state} = useBoardContext();
  const {tableData, selectedRowKeys} = state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const modalData = tableData
    ? tableData.filter((data) => selectedRowKeys.includes(data.id))
    : null;

  const {bulkPickMeSellerExchangeRequests} =
    useBulkPickMeSellerExchangeRequests();

  const newExchangeActions: TableActionType[] = [
    {
      text: '수거완료',
      onClick: async (ids: number[]) => {
        if (
          !ids.every((id) => {
            const record = tableData.find((row) => row.id === id);
            return record.exchangeStatus === ExchangeRequestStatus.Requested;
          })
        ) {
          message.warning('수거중인 요청만 완료처리할 수 있습니다.');
          return;
        }

        await bulkPickMeSellerExchangeRequests(ids);
      },
    },
    {
      text: '교환품재발송',
      onClick: async (_: number[]) => {
        setIsModalOpen(true);
      },
    },
    ...exchangeRequestActions,
  ];

  return (
    <>
      <Header {...props} />
      <Preview
        data={exchangeRequestPreviewData}
        usePreviewData={useMeSellerExchangeRequestsCount}
      />
      <Filter {...props} inputs={exchangeRequestInputs} />
      <Table
        {...props}
        columns={exchangeRequestColumns}
        actions={newExchangeActions}
      />
      <ShipModal {...{modalData, isModalOpen, closeModal}} isReship />
    </>
  );
}

export default ExchangeRequestsBoard;