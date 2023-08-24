const express = require('express');
const port = 7865;
const bodyParser = require("body-parser")


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
})

app.get('/available_payments', (req, res) => {
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  res.json(obj);
})

app.post('/login', (req, res) => {
  res.send('Welcome '+ req.body.userName);
});

app.listen(port, () => {
    console.log(`API available on localhost port 7865`);
  });

module.exports = app;
