import React from 'react';
import moment from 'moment';

export default function TimeFormatter ({ time }) {
  return (
    <div style={{ color: '#999999' }}>{moment(time).format('HH:mm:ss')}</div>
  );
}
