import React from 'react';
import MainLayout from '@src/components/templates/MainLayout';
import Board from '@src/components/templates/Board';

export default function Delivery() {
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
      title: '택배사',
      dataIndex: 'courier',
      key: 'courier',
      sorter: (a, b) => a.courier > b.courier,
      fixed: 'left',
    },
    {
      title: '송장번호',
      dataIndex: 'invoiceNumber',
      key: 'invoiceNumber',
      sorter: (a, b) => a.invoiceNumber > b.invoiceNumber,
      fixed: 'left',
    },
    {
      title: '배송추적',
      dataIndex: 'deliveryTraceUrl',
      key: 'deliveryTraceUrl',
      render: url => <a href={url}>배송추적</a>,
      sorter: (a, b) => a.deliveryTraceUrl > b.deliveryTraceUrl,
      fixed: 'left',
    },
    {
      title: '배송지',
      dataIndex: 'addressStr',
      key: 'addressStr',
      sorter: (a, b) => a.addressStr > b.addressStr,
    },
    {
      title: '우편번호',
      dataIndex: 'zipCode',
      key: 'zipCode',
      sorter: (a, b) => a.zipCode > b.zipCode,
    },
    {
      title: '주문일시',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => a.createdAt > b.createdAt,
    },
    {
      title: '주문상태',
      dataIndex: 'state',
      key: 'state',
      sorter: (a, b) => a.state > b.state,
    },
    {
      title: '클레임상태',
      dataIndex: 'claimState',
      key: 'claimState',
      sorter: (a, b) => a.claimState > b.claimState,
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
      courier: '우체국택배',
      invoiceNumber: '01010101',
      deliveryTraceUrl: 'https://pickk.one/',
      addressStr: '서울특별시 송파구 잠실로 88 레이크팰리스 125-201',
      zipCode: '05607',
      createdAt: `2020/01/0${i % 9 + 1}`,
      state: '배송중',
      claimState: '교환',
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
      text: '발주확인',
      onClick: (nums: number[]) => {
        return;
      },
    },
    {
      text: '발송처리',
      onClick: num => {
        return;
      },
    },
    {
      text: '엑셀 일괄발송',
      onClick: num => {
        return;
      },
    },
    {
      text: '발송지연 안내',
      onClick: num => {
        return;
      },
    },
    {
      text: '판매취소',
      onClick: num => {
        return;
      },
    },
  ];

  const footActions = [
    {
      text: '선택건 주문서 출력',
      onClick: num => {
        return;
      },
    },
    {
      text: '선택건 출고지/옵션별 주문수량 보기',
      onClick: num => {
        return;
      },
    },
  ];

  return (
    <MainLayout>
      <Board
        title="발주/발송 관리"
        subTitle="신규 주문건 확인 및 발송처리를 진행하실 수 있는 메뉴입니다."
        helpTexts={[
          `결제일로부터 3영업일 이내에 발송처리를 진행하지 않으시면, 페널티가 부과됩니다.`,
          `발송처리가 늦어질 것으로 예상되면 하단에 ‘발송지연 안내’ 버튼을 눌러 발송기한을 입력하셔야 합니다.(1회만 가능)`,
          `택배 이외에 등기/소포/퀵서비스/방문수령/직접전달한 주문도 배송방법 그리드에서 배송정보 입력이 가능합니다.`,
        ]}
        {...{columns, dataSource, actions, footActions}}
      />
    </MainLayout>
  );
}
