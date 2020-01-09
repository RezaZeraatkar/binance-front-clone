import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DrawerHeaderWrapper = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  font-size: 0.736rem;
  & div:first-child {
    flex-basis: 10%;
    margin: 5px 10px 0px 10px;
  }
  & div:nth-child(2) {
    flex-basis: 80%;
    display: flex;
    justify-content: flex-start;
    & a {
      color: #fff;
    }
  }
`;

// Custom Components

export default class DrawerHeader extends Component {
  render () {
    return (
      <DrawerHeaderWrapper>
        {/* first Child */}
        <div>
          <FaUserCircle color='#3d4c5c' size='25' />
        </div>
        {/* second Child */}
        <div>
          <Link to='/register'>Register</Link>
          <span style={{ margin: '0 7px' }}>|</span>
          <Link to='/login'>Log In</Link>
        </div>
      </DrawerHeaderWrapper>
    );
  }
}
