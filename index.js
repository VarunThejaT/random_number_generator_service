const express = require('express');
const app = express();
const port = 9876;

app.get('/getrandomnumber', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  console.log('GET /getrandomnumber invoked, returning random number: ' + randomNumber);
  res.json({ randomNumber });
});

app.listen(port, () => {
  console.log(`Random number generator service listening at http://localhost:${port}`);
});
