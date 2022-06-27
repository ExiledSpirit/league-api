const express = require('express');
const router = express.Router();
const { getPUUID, getMatches, byMatchId } = require('../riot-api/riot-api');

router.get('/partidas/:username', async (req, res) => {
  const PUUID = await getPUUID(req.params.username);
  const matchIds = await getMatches(PUUID);
  matches = await Promise.all(matchIds?.map((matchId) => byMatchId(matchId)));

  res.json(matches);
});


module.exports = router;
