import React from 'react';
import { Link } from 'react-router-dom';

export default function OCOLimitInfo ({ text, url }) {
  return (
    <span
      style={{
        fontSize: 13,
        color: '#333333',
        wordBreak: 'break-word',
      }}
      className='test'
    >
      <p>{text}</p>
      <Link to={url} style={{ color: '#F0B90B', fontSize: 14 }}>
        view more
      </Link>
    </span>
  );
}
