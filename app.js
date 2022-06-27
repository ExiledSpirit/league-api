const express = require('express');
const cors = require('cors');
const index = require('./routes/index');

const app = express();

require('dotenv').config();
app.use(cors());

app.listen(4000, async () => {
  console.log('porta 4000');
});

app.use(index);
