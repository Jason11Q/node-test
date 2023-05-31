const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/avws', async (req, res) => {
  let data = await fs.readFileSync('./avws/1.avws');
  res.write({
    success: true,
    data,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
