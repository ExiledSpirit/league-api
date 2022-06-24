const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

const API_KEY = dotenv.parse('API_KEY');

const app = express();

app.use(cors());

app.listen(4000, () => {
  console.log('porta 4000');
});