const express = require('express');
const path = require('path');
const app = express();

// Use global fetch if available (Node 18+), otherwise dynamically import node-fetch
const fetch = globalThis.fetch
  ? (...args) => globalThis.fetch(...args)
  : (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/names', async (req, res) => {
  try {
    // Backend URL is provided via env var BACKEND_URL (full path to /api),
    // fallback to localhost:5000 when running on host.
    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000/api';
    // When running under docker-compose, set BACKEND_URL=http://backend:5000/api
    const response = await fetch(backendUrl);
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      console.error('Bad response from backend:', response.status, text);
      return res.status(502).json({ error: 'Bad response from backend' });
    }
    const data = await response.json();
    // data expected to be { data: [...] }
    res.json(Array.isArray(data.data) ? data.data : []);
  } catch (err) {
    console.error('Error fetching names from backend:', err);
    res.status(500).json({ error: 'Error fetching names' });
  }
});

app.listen(3000, () => {
  console.log('Express server running on port 3000');
});
