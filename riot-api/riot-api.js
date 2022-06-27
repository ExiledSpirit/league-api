const axios = require('axios');

function getPUUID(username) {
  return axios.get(`https://br1.${process.env.URL_BASE}/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.API_KEY}`)
    .then((value) => value.data.puuid)
    .catch((err) => err);
}

function getMatches(PUUID) {
  return axios.get(`https://americas.${process.env.URL_BASE}/lol/match/v5/matches/by-puuid/${PUUID}/ids?count=5&api_key=${process.env.API_KEY}`)
    .then((value) => value.data)
    .catch((err) => err);
}

function byMatchId(id) {
  return axios.get(`https://americas.${process.env.URL_BASE}/lol/match/v5/matches/${id}?api_key=${process.env.API_KEY}`)
    .then((value) => value.data)
    .catch((err) => err);
}

module.exports = {
  getPUUID,
  getMatches,
  byMatchId
};
