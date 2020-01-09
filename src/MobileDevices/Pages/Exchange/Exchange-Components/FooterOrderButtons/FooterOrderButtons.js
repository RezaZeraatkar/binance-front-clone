import React from 'react';
import { Layout, Button } from 'antd';

const { Footer } = Layout;

export default function FooterOrderButtons () {
  return (
    <Layout className='footer-order-btns'>
      <Footer
        style={{
          position: 'fixed',
          zIndex: 800,
          width: '100%',
          background: '#1F2833',
          bottom: '0px',
          padding: '0px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#2b333a',
            padding: '0.375rem 0.6rem',
            alignItems: 'center',
          }}
        >
          <Button
            type='primary'
            style={{
              backgroundColor: '#619200',
              width: '48%',
              border: '0px',
              borderRadius: '0px',
              color: '#FFFFFF',
            }}
          >
            Buy BTC
          </Button>
          <Button
            type='primary'
            style={{
              backgroundColor: '#FF007A',
              width: '48%',
              border: '0px',
              borderRadius: '0px',
              color: '#FFFFFF',
            }}
          >
            Sell BTC
          </Button>
        </div>
      </Footer>
    </Layout>
  );
}
