import React from 'react';
import MainLayout from '@src/components/templates/MainLayout';
import Board from '@src/components/templates/Board';

export default function ClaimCancel() {
  const columns = [
    {
      title: '상품주문번호',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id > b.id,
      fixed: 'left',
    },
    {
      title: '주문번호',
      dataIndex: 'merchantUid',
      key: 'merchantUid',
      sorter: (a, b) => a.merchantUid > b.merchantUid,
      fixed: 'left',
    },
    {
      title: '주문일시',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => a.createdAt > b.createdAt,
    },
    {
      title: '주문상태',
      dataIndex: 'orderState',
      key: 'orderState',
      sorter: (a, b) => a.orderState > b.orderState,
    },
    {
      title: '취소처리상태',
      dataIndex: 'state',
      key: 'state',
      sorter: (a, b) => a.state > b.state,
    },
    {
      title: '결제일',
      dataIndex: 'paidAt',
      key: 'paidAt',
      sorter: (a, b) => a.paidAt > b.paidAt,
    },
    {
      title: '취소요청일',
      dataIndex: 'requestedAt',
      key: 'requestedAt',
      sorter: (a, b) => a.requestedAt > b.requestedAt,
    },
    {
      title: '취소사유',
      dataIndex: 'refundReason',
      key: 'refundReason',
      sorter: (a, b) => a.cancelledReason > b.cancelledReason,
    },
    {
      title: '취소승인일',
      dataIndex: 'approvedAt',
      key: 'approvedAt',
      sorter: (a, b) => a.approvedAt > b.approvedAt,
    },
    {
      title: '취소완료일',
      dataIndex: 'pickedUpAt',
      key: 'pickedUpAt',
      sorter: (a, b) => a.pickedUpAt > b.pickedUpAt,
    },
    {
      title: '상품명',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name > b.name,
    },
    {
      title: '색상',
      dataIndex: 'color',
      key: 'color',
      sorter: (a, b) => a.color > b.color,
    },
    {
      title: '사이즈',
      dataIndex: 'size',
      key: 'size',
      sorter: (a, b) => a.size > b.size,
    },
    {
      title: '기타옵션',
      dataIndex: 'options',
      key: 'options',
      sorter: (a, b) => a.options > b.options,
    },
    {
      title: '수량',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: '구매자명',
      dataIndex: 'customerName',
      key: 'customerName',
      sorter: (a, b) => a.customerName > b.customerName,
    },
    {
      title: '구매자번호',
      dataIndex: 'customerPhoneNumber',
      key: 'customerPhoneNumber',
      sorter: (a, b) => a.customerPhoneNumber > b.customerPhoneNumber,
    },
    {
      title: '수취인명',
      dataIndex: 'recipientName',
      key: 'recipientName',
      sorter: (a, b) => a.recipientName > b.recipientName,
    },
  ];

  const dataSource = [];
  for (let i = 1; i < 92; ++i) {
    dataSource.push({
      id: 'id',
      merchantUid: 'merchantUid',
      createdAt: `2020/01/0${i % 9 + 1}`,
      orderState: '주문완료',
      state: '배송완료',
      collectState: '수거중',
      paidAt: `2020/01/0${i % 9 + 1}`,
      requestedAt: `2020/01/0${i % 9 + 1}`,
      refundReason: '단순변심',
      approvedAt: `2020/01/0${i % 9 + 1}`,
      pickedUpAt: `2020/01/0${i % 9 + 1}`,
      refundPendingState: '환불보류',
      pickUpFee: '3000',
      completedAt: `2020/01/0${i % 9 + 1}`,
      dueDate: `2020/01/0${i % 9 + 1}`,
      name: '기모 짱짱 맨투맨 (그레이)' + i,
      color: '화이트',
      size: 'L',
      options: '',
      quantity: i % 3,
      customerName: `구매자${i % 10}`,
      customerPhoneNumber: '01012345678',
      recipientName: `수령자${i % 10}`,
    });
  }

  const actions = [
    {
      text: '송장수정',
      onClick: (nums: number[]) => {
        return;
      },
    },
    {
      text: '판매자 직접 반품',
      onClick: num => {
        return;
      },
    },
    {
      text: '판매자 직접 교환',
      onClick: num => {
        return;
      },
    },
  ];

  return (
    <MainLayout>
      <Board
        title="취소 관리"
        subTitle="구매자가 요청한 취소 주문건에 대해 완료/거부처리를 진행하실 수 있는 메뉴입니다."
        helpTexts={[
          `발송전 주문건을 취소하고자 하신다면 발주/발송관리 메뉴에서, 구매확정 완료된 주문건을 취소하고자 하신다면 구매확정 내역 메뉴에서 취소처리가 가능합니다.`,
        ]}
        {...{columns, dataSource, actions}}
      />
    </MainLayout>
  );
}
