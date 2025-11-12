const express = require('express');
const path = require('path');
const app = express();

const fetch = (...args) =>
  import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/names', async (req, res) => {
  try {
    const response = await fetch('http://localhost:8000/api');
    const data = await response.json();
    res.json(data.data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching names' });
  }
});

app.listen(3000, () => {
  console.log('Express server running on port 3000');
});
