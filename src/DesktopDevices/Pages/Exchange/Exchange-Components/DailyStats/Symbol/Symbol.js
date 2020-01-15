import React from 'react';

export default function Symbol ({ symbolData }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        flex: '1 1 auto',
      }}
    >
      {symbolData}
    </div>
  );
}
