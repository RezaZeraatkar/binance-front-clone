import React, { Component } from 'react';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import styled from 'styled-components';

const ArrowIcons = styled.span`
  line-height: 0;
  & svg:nth-child(2) {
    display: none;
  }
`;

const StyledFaLongArrowAltUp = styled(FaLongArrowAltUp)`
  font-size: 0.876em;
  line-height: 100%;
  color: green;
`;
const StyledFaLongArrowAltDown = styled(FaLongArrowAltDown)`
  font-size: 0.876em;
  line-height: 100%;
  color: red;
`;

export default class styledArowIcons extends Component {
  state = {
    isUp: null,
  };

  ArowRenderer(isUp) {
    if (isUp === true) {
      return <StyledFaLongArrowAltUp />;
    } else if (isUp === false) {
      return <StyledFaLongArrowAltDown />;
    } else {
      return null;
    }
  }

  render() {
    const { isUp } = this.state;
    return (
      <div>
        <ArrowIcons>{this.ArowRenderer(isUp)}</ArrowIcons>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.onData && prevProps.onData !== this.props.onData) {
      let isUp = null;
      if (prevProps.onData > this.props.onData) {
        isUp = false;
      } else if (prevProps.onData < this.props.onData) {
        isUp = true;
      } else {
        isUp = null;
      }
      this.setState({
        isUp,
      });
    }
  }
}
