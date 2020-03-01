import React, { Component } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ScrollbarsContainer = styled.div`
  & .react-custom-scrollbars-thumb-vertical {
    background-color: ${props => props.theme.colors.background.scrollTrack};
  }
  & .react-custom-scrollbars-track-vertical {
    background-color: ${props =>
      props.theme.colors.background.scrollThumb} !important;
    width: 5px !important;
    height: 100%;
    right: 0px;
    top: 0px;
  }
`;

export default class StyledScrollbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
    this.renderThumbVertical.bind(this);
    this.renderTrackVertical.bind(this);
  }
  renderThumbVertical({ style, ...props }) {
    return (
      <div
        {...props}
        style={{ ...style }}
        className="react-custom-scrollbars-thumb-vertical"
      />
    );
  }
  renderTrackVertical({ style, ...props }) {
    return (
      <div
        {...props}
        style={{ ...style }}
        className="react-custom-scrollbars-track-vertical"
      />
    );
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <ScrollbarsContainer>
        <Scrollbars
          ref="scrollbars"
          {...rest}
          renderThumbVertical={this.renderThumbVertical}
          renderTrackVertical={this.renderTrackVertical}
        >
          {children}
        </Scrollbars>
      </ScrollbarsContainer>
    );
  }

  componentDidMount() {
    let { scrollbars } = this.refs;
    if (this.props.scrolltobottom) {
      scrollbars.scrollToBottom();
    }
    this.setState({
      mounted: true,
    });
  }
}

StyledScrollbar.propTypes = {
  scrollToBottom: PropTypes.bool,
};
