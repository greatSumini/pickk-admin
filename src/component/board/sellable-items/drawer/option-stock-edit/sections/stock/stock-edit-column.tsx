import {useState} from 'react';
import {useMutation} from '@apollo/client';
import {Button, Input, message, Space, Typography} from 'antd';
import {ButtonType} from 'antd/lib/button';

import {useBoardContext} from '@src/contexts/Board';
import {UPDATE_PRODUCT_MUTATION} from '@src/operations/item/mutation';
import {
  UpdateProduct,
  UpdateProductVariables,
} from '@src/operations/__generated__/UpdateProduct';

const {Text} = Typography;

function StockEditColumn({id, defaultValue}) {
  const {
    state: {selectedData},
    action: {reload},
  } = useBoardContext();
  const {isInfiniteStock} = selectedData;
  const [isEditable, setIsEditable] = useState(false);
  const [stock, setStock] = useState<number>(defaultValue);
  const [updateProduct] = useMutation<UpdateProduct, UpdateProductVariables>(
    UPDATE_PRODUCT_MUTATION.gql,
  );

  const [buttonType, buttonText]: [ButtonType, string] = isEditable
    ? ['primary', '저장']
    : ['default', '수정'];

  const handleChange = ({target: {value}}) => {
    const newStock = parseInt(value || '0', 10);
    if (Number.isNaN(newStock)) {
      return;
    }

    setStock(newStock);
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    updateProduct({
      variables: {
        id: id,
        updateProductInput: {
          stock,
        },
      },
    })
      .then(() => {
        setIsEditable(false);
        reload();
      })
      .catch(() => {
        message.error('재고 수정에 실패했습니다.');
      });
  };

  const handleCancle = () => {
    setStock(defaultValue);
    setIsEditable(false);
  };

  if (isInfiniteStock) {
    return <>무한재고 ✅</>;
  }

  const StockInfo = (
    <>
      {isEditable && (
        <Input value={stock} onChange={handleChange} size="small" />
      )}
      {!isEditable && <Text>{stock} 개</Text>}
    </>
  );

  return (
    <>
      {StockInfo}
      <Space style={{display: 'flex', marginTop: '0.4rem'}}>
        <Button
          onClick={isEditable ? handleSaveClick : handleEditClick}
          type={buttonType}
          size="small">
          {buttonText}
        </Button>
        {isEditable && (
          <Button onClick={handleCancle} size="small">
            취소
          </Button>
        )}
      </Space>
    </>
  );
}

export default StockEditColumn;