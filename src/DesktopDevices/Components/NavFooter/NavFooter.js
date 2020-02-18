import React from 'react';

// Components
import Community from './Community';

// Styles
import {
  FooterWrapper,
  FooterTitle,
  Links,
  FooterCol,
  StyledLink,
  Footer,
  Rights,
} from './Styles/StyledFooter';

// footer text data
import { TextData } from './content';

export default function NavFooter() {
  return (
    <FooterWrapper>
      <Footer>
        {TextData.map(item => (
          <FooterCol key={item.id}>
            <FooterTitle>{item.title}</FooterTitle>
            <Links>
              {item.links.map((link, i) => (
                <StyledLink to={link.LinkTo} key={i}>
                  {link.text}
                </StyledLink>
              ))}
            </Links>
          </FooterCol>
        ))}
        <Community />
      </Footer>
      <Rights>© 2017 - 2020 Binance.com. All rights reserved</Rights>
    </FooterWrapper>
  );
}
