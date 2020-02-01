import React, { Component } from 'react';
import ChartPic from '../../../../assets/chartpic.png';

export default class Chart extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: '463px',
          marginBottom: 24,
          display: 'flex',
        }}
      >
        <img
          src={ChartPic}
          alt="chart temp pic"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    );
  }
}
