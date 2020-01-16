let express = require('express');
let cors = require('cors');
let Binance = require('binance-api-node').default;

let app = express();
let client = Binance();

// middlewares
app.use(cors());

// API Roues
app.get('/exchange-info', async (req, res) => {
  let exchange_info = await client.exchangeInfo();
  res.status(200).send(exchange_info);
});

app.get('/daily-stats', async (req, res) => {
  let daily_stats = await client.dailyStats({ symbol: 'ZECPAX' });
  res.status(200).send(daily_stats);
});

app.get('/order-book', async (req, res) => {
  let order_books = await client.book({ symbol: 'BTCUSDT' });
  res.status(200).send(order_books);
});

// app.get('/currency-pairs', async (req, res) => {
//   // currency pairs object
//   let currencyPairs = {};
//   timeout = 1000;
//   try {
//     // base: BNB
//     // let ADABNB = await client.dailyStats({ symbol: 'ADABNB' });
//     // let AEBNB = await client.dailyStats({ symbol: 'AEBNB' });
//     // let AGIBNB = await client.dailyStats({ symbol: 'AGIBNB' });
//     // let AIONBNB = await client.dailyStats({ symbol: 'AIONBNB' });
//     // let ALGOBNB = await client.dailyStats({ symbol: 'ALGOBNB' });
//     // let AMBBNB = await client.dailyStats({ symbol: 'AMBBNB' });
//     // let ANKRBNB = await client.dailyStats({ symbol: 'ANKRBNB' });
//     // let APPCBNB = await client.dailyStats({ symbol: 'APPCBNB' });
//     // let ARPABNB = await client.dailyStats({ symbol: 'ARPABNB' });
//     // let ATOMBNB = await client.dailyStats({ symbol: 'ATOMBNB' });
//     // let BANDBNB = await client.dailyStats({ symbol: 'BANDBNB' });
//     // base: BTC
//     // let ADABTC = await client.dailyStats({ symbol: 'ADABTC' });
//     // let ADXBTC = await client.dailyStats({ symbol: 'ADXBTC' });
//     // let AGIBTC = await client.dailyStats({ symbol: 'AGIBTC' });
//     // let AIONBTC = await client.dailyStats({ symbol: 'AIONBTC' });
//     // let ALGOBTC = await client.dailyStats({ symbol: 'ALGOBTC' });
//     // let AMBBTC = await client.dailyStats({ symbol: 'AMBBTC' });
//     // let ANKRBTC = await client.dailyStats({ symbol: 'ANKRBTC' });
//     // let APPCBTC = await client.dailyStats({ symbol: 'APPCBTC' });
//     // let ARDRBTC = await client.dailyStats({ symbol: 'ARDRBTC' });
//     // let ARKBTC = await client.dailyStats({ symbol: 'ARKBTC' });
//     // base: ETH
//     // let ADAETH = await client.dailyStats({ symbol: 'ADAETH' });
//     // let ADXETH = await client.dailyStats({ symbol: 'ADXETH' });
//     // let AEETH = await client.dailyStats({ symbol: 'AEETH' });
//     // let AGIETH = await client.dailyStats({ symbol: 'AGIETH' });
//     // let AIONETH = await client.dailyStats({ symbol: 'AIONETH' });
//     // let AMBETH = await client.dailyStats({ symbol: 'AMBETH' });
//     // let APPCETH = await client.dailyStats({ symbol: 'APPCETH' });
//     // let ARDRETH = await client.dailyStats({ symbol: 'ARDRETH' });
//     // let ARKETH = await client.dailyStats({ symbol: 'ARKETH' });
//     // let BCDETH = await client.dailyStats({ symbol: 'BCDETH' });
//     // base: TRX
//     // let BTTTRX = await client.dailyStats({ symbol: 'BTTTRX' });
//     // let WINTRX = await client.dailyStats({ symbol: 'WINTRX' });
//     // // base: XRP
//     // let TRXXRP = await client.dailyStats({ symbol: 'TRXXRP' });
//     // let XZCXRP = await client.dailyStats({ symbol: 'XZCXRP' });
//     // base: USDT
//     let ADAUSDT = await client.dailyStats({ symbol: 'ADAUSDT' });
//     let ALGOUSDT = await client.dailyStats({ symbol: 'ALGOUSDT' });
//     let ANKRUSDT = await client.dailyStats({ symbol: 'ANKRUSDT' });
//     let ARPAUSDT = await client.dailyStats({ symbol: 'ARPAUSDT' });
//     let ATOMUSDT = await client.dailyStats({ symbol: 'ATOMUSDT' });
//     let BANDUSDT = await client.dailyStats({ symbol: 'BANDUSDT' });
//     let BATUSDT = await client.dailyStats({ symbol: 'BATUSDT' });
//     let BCHUSDT = await client.dailyStats({ symbol: 'BCHUSDT' });
//     let BEAMUSDT = await client.dailyStats({ symbol: 'BEAMUSDT' });
//     let BNBUSDT = await client.dailyStats({ symbol: 'BNBUSDT' });
//     let BTTUSDT = await client.dailyStats({ symbol: 'BTTUSDT' });
//     let BTCUSDT = await client.dailyStats({ symbol: 'BTCUSDT' });
//     // base: BUSD
//     let ADABUSD = await client.dailyStats({ symbol: 'ADABUSD' });
//     let BCHBUSD = await client.dailyStats({ symbol: 'BCHBUSD' });
//     let BNBBUSD = await client.dailyStats({ symbol: 'BNBBUSD' });
//     let BTCBUSD = await client.dailyStats({ symbol: 'BTCBUSD' });
//     let EOSBUSD = await client.dailyStats({ symbol: 'EOSBUSD' });
//     let ETCBUSD = await client.dailyStats({ symbol: 'ETCBUSD' });
//     let ETHBUSD = await client.dailyStats({ symbol: 'ETHBUSD' });
//     let EURBUSD = await client.dailyStats({ symbol: 'EURBUSD' });
//     let LINKBUSD = await client.dailyStats({ symbol: 'LINKBUSD' });
//     let LTCBUSD = await client.dailyStats({ symbol: 'LTCBUSD' });
//     let QTUMBUSD = await client.dailyStats({ symbol: 'QTUMBUSD' });
//     let TRXBUSD = await client.dailyStats({ symbol: 'TRXBUSD' });
//     let VETBUSD = await client.dailyStats({ symbol: 'VETBUSD' });
//     let XLMBUSD = await client.dailyStats({ symbol: 'XLMBUSD' });
//     let XRPBUSD = await client.dailyStats({ symbol: 'XRPBUSD' });

//     // MAKE CURRENCY PAIRS:  Array of currency pairs with different bases
//     // currencyPairs = [
//     //   {
//     //     base: 'BNB',
//     //     data: [
//     //       ADABNB,
//     //       AEBNB,
//     //       AGIBNB,
//     //       AIONBNB,
//     //       ALGOBNB,
//     //       AMBBNB,
//     //       ANKRBNB,
//     //       APPCBNB,
//     //       ARPABNB,
//     //       ATOMBNB,
//     //       BANDBNB,
//     //     ],
//     //   },
//     //   {
//     //     base: 'BTC',
//     //     data: [
//     //       ADABTC,
//     //       ADXBTC,
//     //       AGIBTC,
//     //       AIONBTC,
//     //       ALGOBTC,
//     //       AMBBTC,
//     //       ANKRBTC,
//     //       APPCBTC,
//     //       ARDRBTC,
//     //       ARKBTC,
//     //     ],
//     //   },
//     //   {
//     //     base: 'ETH',
//     //     data: [
//     //       ADAETH,
//     //       ADXETH,
//     //       AEETH,
//     //       AGIETH,
//     //       AIONETH,
//     //       AMBETH,
//     //       APPCETH,
//     //       ARDRETH,
//     //       ARKETH,
//     //       BCDETH,
//     //     ],
//     //   },
//     //   {
//     //     base: 'TRX',
//     //     data: [BTTTRX, WINTRX],
//     //   },
//     //   {
//     //     base: 'XRP',
//     //     data: [TRXXRP, XZCXRP],
//     //   },
//     //   {
//     //     base: 'USDT',
//     //     data: [
//     //       ADAUSDT,
//     //       ALGOUSDT,
//     //       ANKRUSDT,
//     //       ARPAUSDT,
//     //       ATOMUSDT,
//     //       BANDUSDT,
//     //       BATUSDT,
//     //       BCHUSDT,
//     //       BEAMUSDT,
//     //       BNBUSDT,
//     //       BTTUSDT,
//     //       BTCUSDT,
//     //     ],
//     //   },
//     //   {
//     //     base: 'BUSD',
//     //     data: [
//     //       ADABUSD,
//     //       BCHBUSD,
//     //       BNBBUSD,
//     //       BTCBUSD,
//     //       EOSBUSD,
//     //       ETCBUSD,
//     //       ETHBUSD,
//     //       EURBUSD,
//     //       LINKBUSD,
//     //       LTCBUSD,
//     //       QTUMBUSD,
//     //       TRXBUSD,
//     //       VETBUSD,
//     //       XLMBUSD,
//     //       XRPBUSD,
//     //     ],
//     //   },
//     // ];
//     currencyPairs = [
//       {
//         base: 'USDT',
//         data: [
//           ADAUSDT,
//           ALGOUSDT,
//           ANKRUSDT,
//           ARPAUSDT,
//           ATOMUSDT,
//           BANDUSDT,
//           BATUSDT,
//           BCHUSDT,
//           BEAMUSDT,
//           BNBUSDT,
//           BTTUSDT,
//           BTCUSDT,
//         ],
//       },
//       {
//         base: 'BUSD',
//         data: [
//           ADABUSD,
//           BCHBUSD,
//           BNBBUSD,
//           BTCBUSD,
//           EOSBUSD,
//           ETCBUSD,
//           ETHBUSD,
//           EURBUSD,
//           LINKBUSD,
//           LTCBUSD,
//           QTUMBUSD,
//           TRXBUSD,
//           VETBUSD,
//           XLMBUSD,
//           XRPBUSD,
//         ],
//       },
//     ];
//     res.status(200).send(currencyPairs);
//   } catch (err) {
//     return console.log('[GET_CURRENCYPAIRS_ERROR]: ', err);
//   }
// });

app.get('/recent-trades', async (req, res) => {
  let recent_trades = await client.trades({ symbol: 'BTCUSDT' });
  res.status(200).send(recent_trades);
});

// PORT
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server Running');
});
