import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const DIV = styled.div`
  color: ${props => props.theme.colors.font.info};
`;

export default function TimeFormatter({ time }) {
  return <DIV>{moment(time).format('HH:mm:ss')}</DIV>;
}
