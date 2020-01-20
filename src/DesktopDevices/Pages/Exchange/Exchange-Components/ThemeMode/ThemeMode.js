import React from 'react';
import { Tooltip } from 'antd';
import { FiSun } from 'react-icons/fi';
import { FaRegMoon } from 'react-icons/fa';

import Theme from '../../../../../Theme/ThemeProvider';

const DarkMode = <span>Dark Mode</span>;
const LightMode = <span>Light Mode</span>;

export default function ThemeMode () {
  return (
    <div style={{ display: 'flex', flex: '1 1 auto' }}>
      <div
        style={{
          border: '1px solid rgb(230,230,230)',
          height: '23px',
          width: '28px',
          textAlign: 'center',
          lineHeight: '0',
          padding: '4px',
          backgroundColor: '#F7F7F7',
          cursor: 'pointer',
        }}
      >
        <Tooltip placement='bottomRight' title={LightMode}>
          <FiSun
            style={{
              color: Theme.Colors.WarningColor,
            }}
          />
        </Tooltip>
      </div>
      <div
        style={{
          border: '1px solid rgb(230,230,230)',
          height: '23px',
          width: '28px',
          textAlign: 'center',
          lineHeight: '0',
          padding: '4px',
          margin: '0 -1px',
          cursor: 'pointer',
        }}
      >
        <Tooltip placement='bottomLeft' title={DarkMode}>
          <FaRegMoon />
        </Tooltip>
      </div>
    </div>
  );
}
