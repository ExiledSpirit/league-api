const express = require('express');
const router = express.Router();
const {getPUUID, getMatches, byMatchId} = require('../riot-api/riot-api');

router.get('/partidas/:username', async (req, res) => {
  const PUUID = await getPUUID(req.params.username);
  console.log(`PUUID = ${PUUID}`);
  const matchIds = await getMatches(PUUID);
  console.log(`matchIds = ${matchIds}`);
  matches = await Promise.all(matchIds?.map((matchId) => byMatchId(matchId)));
  console.log(`matches = ${matches}`);
  res.json(matches);
});


module.exports = router;
