import styled from 'styled-components';

const SecondaryButton = styled.div`
  & button.ant-btn {
    width: 100%;
    background-color: ${props =>
      props.role === 'buy' ? '#70a800' : '#ff007a'};
    border-color: ${props => (props.role === 'buy' ? '#70a800' : '#ff007a')};
    color: #fff;
  }
`;

export default SecondaryButton;
