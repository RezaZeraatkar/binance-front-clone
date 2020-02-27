import React, { Component } from 'react';
import { Tooltip } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// styled components
import Scrollbar from '../Scrollbar/Scrollbar';

const StyledTooltipContent = styled.div`
  display: flex;
  flex-direction: column;
  & div {
    width: 200px;
    display: flex;
    justify-content: space-between;
    span:first-child {
      font-size: 12px;
    }
    span:last-child {
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

const TooltipContent = ({
  baseAsset,
  quoteAsset,
  avgPrice,
  baseAssetSum,
  quoteAssetSum,
}) => (
  <StyledTooltipContent>
    <div key="avgprice">
      <span>Avg.Price:</span>
      <span>&asymp; {avgPrice}</span>
    </div>
    <div key="sum">
      <span>Sum {quoteAsset}:</span>
      <span>{quoteAssetSum}</span>
    </div>
    <div>
      <span key="totalsum">Sum {baseAsset}:</span>
      <span>{baseAssetSum}</span>
    </div>
  </StyledTooltipContent>
);

function selectChilds({ from, to, type }) {
  let SELECTED_CHILDES = ``;
  if (type === 'sell') {
    for (let i = to; i <= from; i++) {
      SELECTED_CHILDES += `> div:nth-child(${i}),`;
    }
  } else if (type === 'buy') {
    for (let i = from; i <= to; i++) {
      SELECTED_CHILDES += `> div:nth-child(${i}),`;
    }
  }

  SELECTED_CHILDES = SELECTED_CHILDES.slice(0, -1);
  // `> div:nth-child(1), > div:nth-child(2), > div:nth-child(3)`;
  return SELECTED_CHILDES;
}

const StyledTable = styled.div`
  display: flex;
  flex: 100%;
  flex-direction: column;
  color: ${props => props.theme.colors.font.primary};
  box-sizing: border-box;
`;

const Thead = styled.div`
  display: ${props => (props.header ? 'block' : 'none')};
  color: ${props => props.theme.colors.font.info};
  font-weight: normal;
  & div div {
    :first-child {
      text-align: left;
    }
    :last-child {
      text-align: right;
    }
  }
`;

const Tbody = styled.div`
  position: relative;
  cursor: pointer;
  & ${props => selectChilds(props)} {
    background-color: ${props => props.theme.colors.background.info};
    :nth-child(${props => props.to}) {
      ${props =>
        props.type === 'sell'
          ? 'border-top: 1px dashed black'
          : 'border-bottom: 1px dashed black'}

      & > .tooltip {
        visibility: visible;
        z-index: 999;
      }
    }
  }
`;

const Tr = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px 1px 7px;
`;

const Th = styled.div`
  text-align: center;
  flex: 1;
`;

const Td = styled.div`
  text-align: center;
  flex: 1;
  z-index: 2;
  & > span:hover {
    font-weight: bold;
  }
  :nth-child(3) {
    text-align: right;
  }
  :nth-child(2) {
    text-align: left;
  }
`;

const VolumeIndicator = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${props => (props.type === 'sell' ? '#ea0070' : '#70a800')};
  opacity: 0.1;
  height: 18px;
  width: ${props => props.width}%;
`;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 0,
      to: 0,
    };
    this.onRowClickedHandler.bind(this);
    this.onRowHoverHandler.bind(this);
  }

  onRowClickedHandler = (data, rowIndex) => {
    this.onRowClicked(data, rowIndex);
  };

  onRowClicked = (data, rowIndex) => {
    this.props.onRowClicked(data, rowIndex);
  };

  onRowHoverHandler = (data, rowIndex) => {
    this.onTableHoverBox(data, rowIndex);
  };

  boxTranslateCoordinates(rowIndex) {
    let from, to;
    if (this.props.type === 'sell') {
      from = this.props.dataSource.length;
      to =
        this.props.dataSource.length -
        (this.props.dataSource.length - rowIndex) +
        1;
    } else {
      from = 1;
      to = rowIndex + 1;
    }
    return {
      from,
      to,
    };
  }

  onTableHoverBox(record, rowIndex) {
    let { from, to } = this.boxTranslateCoordinates(rowIndex);
    this.setState({
      from,
      to,
    });
  }

  onMouseLeaveHandler() {
    this.setState({ from: 0, to: 0 });
  }

  calculateTooltipStats(dataSource, from, to) {
    let avgPrice = 0;
    let baseAssetSum = 0;
    let quoteAssetSum = 0;
    if (from === 0 || to === 0) {
      return {
        avgPrice,
        baseAssetSum,
        quoteAssetSum,
      };
    } else {
      if (this.props.type === 'sell') {
        for (let i = to; i <= from; i++) {
          console.log(dataSource[i - 1]);
          baseAssetSum += parseFloat(dataSource[i - 1].total);
          quoteAssetSum += parseFloat(dataSource[i - 1].amount);
          avgPrice += parseFloat(dataSource[i - 1].priceVal);
        }
        return {
          avgPrice,
          baseAssetSum,
          quoteAssetSum,
        };
      } else if (this.props.type === 'buy') {
        for (let i = from; i <= to; i++) {
          console.log(dataSource[i - 1]);
          baseAssetSum += parseFloat(dataSource[i - 1].total);
          quoteAssetSum += parseFloat(dataSource[i - 1].amount);
          avgPrice += parseFloat(dataSource[i - 1].priceVal);
        }
        return {
          avgPrice,
          baseAssetSum,
          quoteAssetSum,
        };
      }
    }
  }

  render() {
    const {
      columns,
      dataSource,
      type,
      header,
      footer,
      title,
      scrollToBottom,
    } = this.props;
    const { from, to } = this.state;
    // calculate tooltip statistics
    const {
      avgPrice,
      baseAssetSum,
      quoteAssetSum,
    } = this.calculateTooltipStats(dataSource, from, to);
    return (
      <StyledTable>
        {title ? title() : null}
        <Thead header={header}>
          <Tr>
            {columns.map(col => (
              <Th key={col.key}>{col.title}</Th>
            ))}
          </Tr>
        </Thead>
        <Scrollbar
          autoHeight
          autoHeightMin={437}
          autoHeightMax={880}
          hideTracksWhenNotNeeded
          scrolltobottom={scrollToBottom}
        >
          <Tbody
            from={from}
            to={to}
            type={type}
            onMouseLeave={this.onMouseLeaveHandler.bind(this)}
          >
            {dataSource.map(record => {
              return (
                <Tooltip
                  placement="right"
                  title={() => (
                    <TooltipContent
                      baseAsset={'USDT'}
                      quoteAsset={'BTC'}
                      avgPrice={avgPrice}
                      baseAssetSum={baseAssetSum}
                      quoteAssetSum={quoteAssetSum}
                    />
                  )}
                  key={record.key}
                  mouseEnterDelay={0}
                  mouseLeaveDelay={0}
                >
                  <Tr
                    id={record.key}
                    onClick={this.onRowClickedHandler.bind(
                      this,
                      record,
                      record.key,
                    )}
                    onMouseEnter={this.onRowHoverHandler.bind(
                      this,
                      record,
                      record.key,
                    )}
                  >
                    {columns.map(col => (
                      <Td key={col.key}>
                        <span>{record[col.dataIndex]}</span>
                      </Td>
                    ))}
                    <VolumeIndicator width={record.width} type={type} />
                  </Tr>
                </Tooltip>
              );
            })}
          </Tbody>
        </Scrollbar>
        {footer ? footer() : null}
      </StyledTable>
    );
  }
}

Table.propTypes = {
  dataSource: PropTypes.array.isRequired,
  title: PropTypes.func,
};

export default Table;
