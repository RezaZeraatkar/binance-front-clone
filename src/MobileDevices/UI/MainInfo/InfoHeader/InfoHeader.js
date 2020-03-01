import styled from 'styled-components';

const InfoHeader = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'rgb(38, 38, 38)',
  '@media(max-width: 992px) ': {
    display: 'none',
  },
});

export default InfoHeader;
