// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Calculator!');
});

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide num1 and num2 in the request body.' });
  }
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});

app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide num1 and num2 in the request body.' });
  }
  const result = parseFloat(num1) - parseFloat(num2);
  res.json({ result });
});

// Example of multiplication endpoint
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide num1 and num2 in the request body.' });
  }
  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});

// Example of division endpoint
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide num1 and num2 in the request body.' });
  }
  if (parseFloat(num2) === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }
  const result = parseFloat(num1) / parseFloat(num2);
  res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
