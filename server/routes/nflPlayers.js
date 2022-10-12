const router = require('express').Router();
const dotenv = require('dotenv').config({path:"./.env"});
const axios = require('axios');

//nfl players api vars
const NFL_PLAYERS_API_ALL_PLAYERS_ENDPOINT = process.env.NFL_PLAYERS_API_ALL_PLAYERS_ENDPOINT 
const NFL_PLAYERS_API_PLAYER_ENDPOINT = process.env.NFL_PLAYERS_API_PLAYER_ENDPOINT
const NFL_PLAYERS_API_KEY = process.env.NFL_PLAYERS_API_KEY
const NFL_PLAYERS_API_HOST = process.env.NFL_PLAYERS_API_HOST

// get all players
router.get('/api/players', async (req, res) => {
    try {
      const options = {
        method: 'GET',
        url: NFL_PLAYERS_API_ALL_PLAYERS_ENDPOINT,
        headers: {
          'X-RapidAPI-Key': NFL_PLAYERS_API_KEY,
          'X-RapidAPI-Host': NFL_PLAYERS_API_HOST
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data)
      }).catch(function (error) {
        console.error(error);
      });
    } catch (err) {
        res.json(err)
    }    
});

// get player by name
router.get('/api/player/:name', async (req, res) => {
  let playerName = req.params.name.split(" ");

  // convert name to hyphen and title case eg. tom brady => Tom-Brady
  for (let i = 0; i < playerName.length; i++) {
      playerName[i] = playerName[i][0].toUpperCase() + playerName[i].substr(1);
  }
  
  playerName = playerName.join('-');
  console.log("playerName", playerName);
  try {
    const options = {
      method: 'GET',
      url: `${NFL_PLAYERS_API_PLAYER_ENDPOINT}${playerName}`,
      headers: {
        'X-RapidAPI-Key': NFL_PLAYERS_API_KEY,
        'X-RapidAPI-Host': NFL_PLAYERS_API_HOST
      }
    };
    console.log('options', options);
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data)
    }).catch(function (error) {
      console.error(error);
      res.status(500).json(err);
    });
  } catch (err) {
      res.status(500).json(err);
  }    
});



//export router
module.exports = router;
