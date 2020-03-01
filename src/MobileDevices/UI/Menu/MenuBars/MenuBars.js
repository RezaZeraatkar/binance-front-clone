import React from 'react';
import styled from 'styled-components';

const MenuBars = ({ className, children, clicked }) => (
  <div className={className} onClick={clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const MenuBarsWrapper = styled(MenuBars)`
  display: none;
  box-sizing: border-box;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 3px;
  position: relative;
  margin: 10px 8px 0 0px;
  float: right;
  & div {
    width: 25px;
    height: 2px;
    background-color: white;
    margin: 5px 0;
    cursor: pointer;
  }
  @media (max-width: 991px) {
    display: inline-block;
  }
`;

export default MenuBarsWrapper;
