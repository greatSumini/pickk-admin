import {useCouriers} from '@src/common/hooks/apis';

export const useGetCourierId = () => {
  const {data} = useCouriers();

  const courierIdMapper =
    data?.reduce((acc, curr) => {
      return {...acc, [curr.name]: curr.id};
    }, {}) ?? {};

  const getCourierId = (name: string): number => {
    if (!name) {
      return null;
    }

    return courierIdMapper[name.replace(/\s/g, '')];
  };

  return {getCourierId};
};
