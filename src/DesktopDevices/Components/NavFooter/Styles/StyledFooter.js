import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
  padding: 48px 40px;
  padding-bottom: 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  & > div {
    :not(:last-child) {
      margin: 0 25px;
    }
  }
`;

export const FooterTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  color: #848e9c;
`;
export const StyledLink = styled(Link)`
  color: #848e9c;
  margin-bottom: 8px;
  :hover {
    color: #ffffff;
  }
`;

export const Rights = styled.div`
  display: flex;
  align-items: center;
  color: #848e9c;
  height: 85px;
  border-top: 1px solid #333333;
`;

export const CommunityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
`;

export const Icons = styled.div``;

export const IconLink = styled(Link)`
  margin-right: 32px;
  flex-shrink: 0;
  align-items: center;
  display: inline-flex;
  color: #848e9c;
  :hover {
    color: #ffffff;
  }
`;
