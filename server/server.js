const express = require('express');
const cors = require('cors');
const Binance = require('binance-api-node').default;

const app = express();
const client = Binance();

// middlewares
app.use(cors());

// API Roues
app.get('/exchange-info', async (req, res) => {
  const exchange_info = await client.exchangeInfo();
  res.status(200).send(exchange_info);
});

app.get('/daily-stats', async (req, res) => {
  const daily_stats = await client.dailyStats({ symbol: 'BTCUSDT' });
  res.status(200).send(daily_stats);
});

app.get('/order-book', async (req, res) => {
  const order_books = await client.book({ symbol: 'BTCUSDT' });
  res.status(200).send(order_books);
});

app.get('/recent-trades', async (req, res) => {
  const recent_trades = await client.trades({ symbol: 'BTCUSDT' });
  res.status(200).send(recent_trades);
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server Running');
});
