import {message} from 'antd';

import BaseForm from '@src/components/common/organisms/Form/base';

import {
  useMeSellerServiceCenterInfo,
  useUpdateMeSellerServiceCenterInfo,
} from './hooks';

import {FORM_ITEMS} from './form-items';

function ServiceCenterInfoForm() {
  const {data} = useMeSellerServiceCenterInfo();
  const [updateMe] = useUpdateMeSellerServiceCenterInfo();

  const handleSaveClick = (updateSellerInput) => {
    updateMe({
      variables: {
        updateSellerInput,
      },
    })
      .then(() => {
        message.success('저장되었습니다.');
      })
      .catch((err) => {
        message.error('저장에 실패했습니다. err - ' + err);
      });
  };

  return (
    <BaseForm
      FORM_ITEMS={FORM_ITEMS}
      onSaveClick={handleSaveClick}
      defaultValue={data?.meSeller}
    />
  );
}

export default ServiceCenterInfoForm;
