import React from 'react';
import styled from 'styled-components';
import {Typography} from 'antd';

import TableReloadButton from '@src/components/molecules/button/TableReload';
import CsvDownloadButton from '@src/components/molecules/button/CsvDownload';
import ExcelDownloadButton, {
  ExcelDownloadButtonProps,
} from '@src/components/molecules/button/ExcelDownload';
import Space from '@src/components/atoms/space';

export type TableHeaderProps = ExcelDownloadButtonProps;

export default function TableHeader(props: TableHeaderProps) {
  return (
    <Wrapper>
      <Typography.Text strong style={{marginRight: 'auto'}}>
        {`${props.title} 목록 (총 ${
          props.dataSource ? props.dataSource.length : '...'
        }개)`}
      </Typography.Text>
      <TableReloadButton />
      <Space direction="ROW" />
      <ExcelDownloadButton {...props} />
      <Space direction="ROW" size={4} />
      <CsvDownloadButton {...props} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
`;
