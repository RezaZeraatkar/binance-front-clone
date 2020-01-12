import React from 'react';
import { Button } from 'antd';

// Styled Components
import ButtonWrapper from '../../../../../../UI/Buttons/ButtonWrapper';

export default function RatioButtons () {
  return (
    <ButtonWrapper>
      <Button size='small'>25%</Button>
      <Button size='small'>50%</Button>
      <Button size='small'>75%</Button>
      <Button size='small'>100%</Button>
    </ButtonWrapper>
  );
}
