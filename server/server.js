let express = require('express');
let cors = require('cors');
let Binance = require('binance-api-node').default;

let app = express();
let client = Binance({
  apiKey: 'xxx',
  apiSecret: 'xxx',
  getTime: xxx,
});

// middlewares
app.use(cors());

// API Roues
app.get('/exchange-info', async (req, res) => {
  try {
    let exchange_info = await client.exchangeInfo();
    res.status(200).send(exchange_info);
  } catch (err) {
    console.log('[/exchange-info] Server Api ERROR: ', err);
  }
});

app.get('/daily-stats', async (req, res) => {
  try {
    let daily_stats = await client.dailyStats({ symbol: 'BTCUSDT' });
    res.status(200).send(daily_stats);
  } catch (err) {
    console.log('[/daily-stats] Server Api ERROR: ', err);
  }
});

app.get('/order-book', async (req, res) => {
  try {
    let order_books = await client.book({ symbol: 'BTCUSDT' });
    res.status(200).send(order_books);
  } catch (err) {
    console.log('[/order-book] Server Api ERROR: ', err);
  }
});

app.get('/recent-trades', async (req, res) => {
  try {
    let recent_trades = await client.trades({ symbol: 'BTCUSDT' });
    res.status(200).send(recent_trades);
  } catch (err) {
    console.log('[/recent-trades] Server Api ERROR: ', err);
  }
});

// PORT
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server Running');
});

app.get('/currency-pairs', async (req, res) => {
  try {
    let pair = await client.dailyStats({ symbol: 'BTCUSDT' });
    res.status(200).send(pair);
  } catch (err) {
    return console.log('[GET_CURRENCYPAIRS_ERROR]: ', err);
  }
});
