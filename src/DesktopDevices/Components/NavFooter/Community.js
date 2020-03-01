import React from 'react';
import {
  FaFacebook,
  FaTelegram,
  FaTwitter,
  FaReddit,
  FaWeibo,
  FaInstagram,
  FaVk,
  FaYoutube,
} from 'react-icons/fa';

import {
  CommunityWrapper,
  FooterTitle,
  IconLink,
  Icons,
} from './Styles/StyledFooter';

export default function Community() {
  return (
    <CommunityWrapper>
      <FooterTitle>Community</FooterTitle>
      <Icons>
        <IconLink to="">
          <FaFacebook style={{ marginBottom: '24px' }} />
        </IconLink>
        <IconLink to="">
          <FaTelegram style={{ marginBottom: '24px' }} />
        </IconLink>
        <IconLink to="">
          <FaTwitter style={{ marginBottom: '24px' }} />
        </IconLink>
        <IconLink to="">
          <FaReddit style={{ marginBottom: '24px' }} />
        </IconLink>
        <IconLink to="">
          <FaWeibo style={{ marginBottom: '24px' }} />
        </IconLink>
        <IconLink to="">
          <FaInstagram style={{ marginBottom: '24px' }} />
        </IconLink>
        <IconLink to="">
          <FaVk />
        </IconLink>
        <IconLink to="">
          <FaYoutube style={{ marginBottom: '24px' }} />
        </IconLink>
      </Icons>
    </CommunityWrapper>
  );
}
