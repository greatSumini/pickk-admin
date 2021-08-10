import React from 'react';
import {Typography, Button} from 'antd';
import styled from 'styled-components';
import {ReloadOutlined} from '@ant-design/icons';

import {getDateTimeStrings} from '@src/common/helpers/date';
import Space from '@src/components/common/atoms/space';

export type CardReloadButtonProps = {
  time: string;
  onClick: () => void;
};

export default function CardReloadButton({
  time,
  onClick,
}: CardReloadButtonProps) {
  const {hours, minutes} = getDateTimeStrings(Number(time));
  return (
    <Wrapper>
      <StyledText>최근</StyledText>
      <Space direction="ROW" />
      <Typography.Text>
        {hours}:{minutes}
      </Typography.Text>
      <Space direction="ROW" size={8} />
      <Button
        shape="circle"
        icon={<ReloadOutlined />}
        size="small"
        onClick={onClick}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
`;

const StyledText = styled(Typography.Text)`
  font-size: 12px;
  margin-top: 2px;
`;
