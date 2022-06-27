const axios = require('axios');

function getPUUID(username) {
  const API_KEY = process.env.API_KEY;
  const URL_BASE = process.env.URL_BASE;
  
  return axios.get(`https://br1.${URL_BASE}/lol/summoner/v4/summoners/by-name/${username}?api_key=${API_KEY}`)
    .then((value) => value.data.puuid)
    .catch((err) => err);
}

function getMatches(PUUID) {
  const API_KEY = process.env.API_KEY;
  const URL_BASE = process.env.URL_BASE;
  
  return axios.get(`https://americas.${URL_BASE}/lol/match/v5/matches/by-puuid/${PUUID}/ids?count=5&api_key=${API_KEY}`)
    .then((value) => value.data)
    .catch((err) => err);
}

function byMatchId(id) {
  const API_KEY = process.env.API_KEY;
  const URL_BASE = process.env.URL_BASE;
  
  return axios.get(`https://americas.${URL_BASE}/lol/match/v5/matches/${id}?api_key=${API_KEY}`)
    .then((value) => value.data)
    .catch((err) => err);
}

module.exports = {
  getPUUID,
  getMatches,
  byMatchId
};
