import {getTimeString} from '@src/lib/DateParser';
import {addDashToPhoneNumber} from '@src/lib/PhoneNumberParser';
import {addCommaToNumber} from '@src/lib/NumberParser';
import {stringSorter} from '@src/lib/sorter';

export const orderItemColumns = [
  {
    title: '주문번호',
    dataIndex: 'orderMerchantUid',
    key: 'orderMerchantUid',
    sorter: (a, b) => b.orderMerchantUid - a.orderMerchantUid,
    width: 120,
    ellipsis: true,
  },
  {
    title: '상품주문번호',
    dataIndex: 'merchantUid',
    key: 'merchantUid',
    sorter: (a, b) => b.merchantUid - a.merchantUid,
    width: 140,
    ellipsis: true,
  },
  {
    title: '상품번호',
    dataIndex: 'productSku',
    key: 'productSku',
    sorter: (a, b) => stringSorter(b.productSku, a.productSku),
    width: 100,
    ellipsis: true,
  },
  {
    title: '주문상태',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => stringSorter(b.status, a.status),
    width: 70,
    ellipsis: true,
  },
  {
    title: '주문일시',
    dataIndex: 'paidAt',
    key: 'paidAt',
    render: value => <div>{getTimeString(value)}</div>,
    sorter: (a, b) => stringSorter(b.paidAt, a.paidAt),
    width: 140,
    ellipsis: true,
  },
  {
    title: '발주일시',
    dataIndex: 'placedAt',
    key: 'placedAt',
    render: value => <div>{getTimeString(value)}</div>,
    sorter: (a, b) => stringSorter(b.placedAt, a.placedAt),
    width: 140,
    ellipsis: true,
  },
  {
    title: '발송일시',
    dataIndex: 'shippedAt',
    key: 'shippedAt',
    render: value => <div>{getTimeString(value)}</div>,

    sorter: (a, b) => stringSorter(b.shippedAt, a.shippedAt),
    width: 140,
    ellipsis: true,
  },
  {
    title: '배송완료일시',
    dataIndex: 'deliveredAt',
    key: 'deliveredAt',
    render: value => <div>{getTimeString(value)}</div>,

    sorter: (a, b) => stringSorter(b.deliveredAt, a.deliveredAt),
    width: 140,
    ellipsis: true,
  },
  {
    title: '상품명',
    dataIndex: 'itemName',
    key: 'itemName',
    sorter: (a, b) => stringSorter(b.itemName, a.itemName),
    width: 200,
    ellipsis: true,
  },
  {
    title: '옵션(통합)',
    dataIndex: 'options',
    key: 'options',
    render: value => value.join('-'),
    sorter: (a, b) => b.options.join('-').localeCompare(a.options.join('-')),
    width: 100,
    ellipsis: true,
  },
  {
    title: '수량',
    dataIndex: 'quantity',
    key: 'quantity',
    sorter: (a, b) => b.quantity - a.quantity,
    width: 75,
    ellipsis: true,
  },
  {
    title: '구매자명',
    dataIndex: 'buyerName',
    key: 'buyerName',
    sorter: (a, b) => stringSorter(b.buyerName, a.buyerName),
    width: 100,
    ellipsis: true,
  },
  {
    title: '구매자 연락처',
    dataIndex: 'buyerPhone',
    key: 'buyerPhone',
    render: value => <div>{value ? addDashToPhoneNumber(value) : null}</div>,
    sorter: (a, b) => stringSorter(b.buyerPhone, a.buyerPhone),
    width: 125,
    ellipsis: true,
  },
  {
    title: '구매자 이메일',
    dataIndex: 'buyerEmail',
    key: 'buyerEmail',
    sorter: (a, b) => stringSorter(b.buyerEmail, a.buyerEmail),
    width: 175,
    ellipsis: true,
  },
  {
    title: '수취인명',
    dataIndex: 'addressName',
    key: 'addressName',
    sorter: (a, b) => stringSorter(b.addressName, a.addressName),
    width: 75,
    ellipsis: true,
  },
  {
    title: '수취인 연락처',
    dataIndex: 'addressPhone',
    key: 'addressPhone',
    render: value => <div>{value ? addDashToPhoneNumber(value) : null}</div>,
    sorter: (a, b) => stringSorter(b.addressPhone, a.addressPhone),
    width: 125,
    ellipsis: true,
  },
  {
    title: '우편번호',
    dataIndex: 'addressPostCode',
    key: 'addressPostCode',
    sorter: (a, b) => stringSorter(b.addressPostCode, a.addressPostCode),
    width: 75,
    ellipsis: true,
  },
  {
    title: '배송지 주소',
    dataIndex: 'baseAddress',
    key: 'baseAddress',
    sorter: (a, b) => stringSorter(b.baseAddress, a.baseAddress),
    width: 150,
    ellipsis: true,
  },
  {
    title: '배송지 상세주소',
    dataIndex: 'detailAddress',
    key: 'detailAddress',
    sorter: (a, b) => stringSorter(b.detailAddress, a.detailAddress),
    width: 150,
    ellipsis: true,
  },
  {
    title: '배송메세지',
    dataIndex: 'addressMessage',
    key: 'addressMessage',
    sorter: (a, b) => stringSorter(b.addressMessage, a.addressMessage),
    width: 150,
    ellipsis: true,
  },
  {
    title: '판매가격',
    dataIndex: 'salePrice',
    key: 'salePrice',
    render: value => <div>{addCommaToNumber(value)}원</div>,
    sorter: (a, b) => b.salePrice - a.salePrice,
    width: 100,
    ellipsis: true,
  },
  {
    title: '리뷰어',
    dataIndex: 'reviewer',
    key: 'reviewer',
    sorter: (a, b) => stringSorter(b.reviewer, a.reviewer),
    width: 100,
    ellipsis: true,
  },
  {
    title: '구독할인율',
    dataIndex: 'subDiscountRate',
    key: 'subDiscountRate',
    render: value => <div>{value}%</div>,
    sorter: (a, b) => b.subDiscountRate - a.subDiscountRate,
    width: 100,
    ellipsis: true,
  },
];
