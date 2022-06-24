const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

require('dotenv').config();
const API_KEY = process.env.API_KEY;

app.use(cors());

app.listen(4000, () => {
  console.log('porta 4000');
});
