import {
  getTimeString,
  addDashToPhoneNumber,
  stringSorter,
  addCommaToNumber,
} from '@src/common/helpers';
import {BaseRefundRequest} from '@src/common/graphql';

export const refundRequestColumns = [
  {
    title: '주문번호',
    dataIndex: 'orderMerchantUid',
    key: 'orderMerchantUid',
    sorter: (a, b) => stringSorter(b.orderMerchantUid, a.orderMerchantUid),
    width: 100,
    ellipsis: true,
  },
  {
    title: '반품처리상태',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => stringSorter(b.status, a.status),
    width: 100,
    ellipsis: true,
  },
  {
    title: '반품요청일시',
    dataIndex: 'requestedAt',
    key: 'requestedAt',
    render: (value) => getTimeString(value),
    sorter: (a, b) => stringSorter(b.requestedAt, a.requestedAt),
    width: 100,
    ellipsis: true,
  },
  {
    title: '반품상품',
    dataIndex: 'orderItems',
    key: 'orderItems',
    render: (_, record: BaseRefundRequest) => {
      const orderItemsInfos = record.orderItems.map(
        (currItem) =>
          `${currItem.itemName} (${currItem.productVariantName} x ${currItem.quantity})`,
      );
      return orderItemsInfos.map((infoStr) => <p>{infoStr}</p>);
    },
    sorter: (a, b) => stringSorter(b.orderItems, a.orderItems),
    width: 100,
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
    dataIndex: 'buyerPhoneNumber',
    key: 'buyerPhoneNumber',
    render: (value) => addDashToPhoneNumber(value),
    sorter: (a, b) => stringSorter(b.buyerPhoneNumber, a.buyerPhoneNumber),
    width: 100,
    ellipsis: true,
  },
  {
    title: '반품사유',
    dataIndex: 'reason',
    key: 'reason',
    record: (value, record: BaseRefundRequest) =>
      `[${record.faultOf}] ${value}`,
    sorter: (a, b) => stringSorter(b.reason, a.reason),
    width: 100,
    ellipsis: true,
  },
  // @TODO
  {
    title: '수거배송추적',
    dataIndex: '',
    key: '',
    sorter: (a, b) => stringSorter(b._, a._),
    width: 100,
    ellipsis: true,
  },
  {
    title: '반품금액',
    dataIndex: 'amount',
    key: 'amount',
    render: (value) => addCommaToNumber(value),
    sorter: (a, b) => stringSorter(b.amount, a.amount),
    width: 100,
    ellipsis: true,
  },
  {
    title: '배송비차감액',
    dataIndex: 'shippingFee',
    key: 'shippingFee',
    render: (value) => addCommaToNumber(value),
    sorter: (a, b) => stringSorter(b.shippingFee, a.shippingFee),
    width: 100,
    ellipsis: true,
  },
];
