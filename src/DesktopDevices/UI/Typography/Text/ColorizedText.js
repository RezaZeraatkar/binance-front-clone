import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function textColorHandler(sign) {
  if (sign === 'neg') {
    return '#FF007A';
  } else if (sign === 'pos') {
    return '#70A800';
  } else {
    return '#333333';
  }
}

const ColorizedText = styled.span`
  display: flex;
  flex: auto;
  align-items: center;
  font-size: ${props => (props.fontSize ? props.fontSize : 'inherit')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'bold')};
  color: ${props => textColorHandler(props.sign)};
`;

class ColorizedTextContainer extends PureComponent {
  state = {
    sign: 'default',
  };

  componentDidUpdate(prevProps) {
    if (prevProps.onData !== this.props.onData) {
      this.setState({
        sign: prevProps.onData > this.props.onData ? 'neg' : 'pos',
      });
    }
  }

  render() {
    return (
      <ColorizedText sign={this.state.sign}>
        {this.props.children}
      </ColorizedText>
    );
  }
}

ColorizedText.propTypes = {
  children: PropTypes.element.isRequired,
  sign: PropTypes.string,
};

export default ColorizedTextContainer;
