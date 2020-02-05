import React from 'react';
import { Popover as Po } from 'antd';

export default function Popover({ children, ...rest }) {
  return <Po {...rest}>{children}</Po>;
}
