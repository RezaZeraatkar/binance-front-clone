import React from 'react';
import { Dropdown, Menu, Icon } from 'antd';

// ******************** import Custom Styled Components ********************
import StyledDropDown from './StyledCurrency/StyledDropDown';
import StyledSelcetedOption from './StyledCurrency/StyledSelectedOption';
import StyledCard from './StyledCurrency/StyledCard';
import StyledCardItems from './StyledCurrency/StyledCardItems';
import StyledSpan from './StyledCurrency/StyledSpan';

// ******************** Dumy Data ********************
const cardItemsOBJ = [
  { country: 'EUR', unit: '€', isSelected: true },
  { country: 'THB', unit: '฿', isSelected: false },
  { country: 'BRL', unit: 'R€', isSelected: false },
  { country: 'TRY', unit: '₺', isSelected: false },
  { country: 'ARS', unit: 'ARS$', isSelected: false },
  { country: 'MEX', unit: 'Mex$', isSelected: false },
  { country: 'JPY', unit: '¥', isSelected: false },
  { country: 'NGN', unit: '₦', isSelected: false },
  { country: 'CAD', unit: 'C$', isSelected: false },
  { country: 'CNY', unit: '¥', isSelected: false },
  { country: 'AUD', unit: 'A$', isSelected: false },
  { country: 'PHP', unit: '₱', isSelected: false },
  { country: 'UAH', unit: '₴', isSelected: false },
  { country: 'IDR', unit: 'Rp', isSelected: false },
  { country: 'RUB', unit: '₽', isSelected: false },
  { country: 'KRW', unit: '₩', isSelected: false },
  { country: 'VND', unit: '₫', isSelected: false },
  { country: 'GBP', unit: '£', isSelected: false },
  { country: 'UGX', unit: 'USh', isSelected: false },
  { country: 'ZAR', unit: 'R', isSelected: false },
  { country: 'KZT', unit: '₸', isSelected: false },
  { country: 'USD', unit: '$', isSelected: false },
];

// ******************** Currency State ********************

const CardItemsLoader = cardItems => {
  const templ = cardItems.map(item => (
    <StyledCardItems key={item.country}>
      <StyledSpan>
        <div>{item.unit}</div>
      </StyledSpan>
      {item.country}
    </StyledCardItems>
  ));
  return templ;
};

// ******************** sub menu items ********************
const menuItems = (
  <Menu style={{ backgroundColor: '#1e2126', padding: 0 }}>
    <Menu.Item style={{ backgroundColor: '#1e2126', padding: 0 }}>
      <StyledCard>{CardItemsLoader(cardItemsOBJ)}</StyledCard>
    </Menu.Item>
  </Menu>
);

export default function Currency() {
  return (
    <Dropdown overlay={menuItems}>
      <StyledDropDown>
        <StyledSelcetedOption>
          <div
            style={{
              background: '#2A2D33',
              borderRadius: '24px',
              width: '82px',
              height: '32px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ paddingRight: '8px', display: 'inline-block' }}>
              EUR
            </div>
            <Icon type="down" style={{ margin: '0' }} />
          </div>
        </StyledSelcetedOption>
      </StyledDropDown>
    </Dropdown>
  );
}
