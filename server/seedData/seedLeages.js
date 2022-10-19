const { User, validate } = require('../models/user');
const { League } = require('../models/league');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path:"./.env"});

const assignLeagueToUser = async () => {
    //get all users on test db
    try {
        const allUsers = await User.find({});
        
        //generate only two league
        const leagueOne = new League({name: 'Kart League', commisioner: 'kartleague@test.com', teams: []})
        const leagueTwo = new League({name: 'Actuary League', commisioner: 'actuaryleague@test.com', teams: []});
        allUsers.forEach((user) => {
            const coin = Math.round(Math.random());
            const whichLeague = coin > 0 
                ? leagueOne
                : leagueTwo
            console.log('league', whichLeague);
            //assign one of two leagues to every user
            user.leagues.push(whichLeague);
            //TODO have to discounect if user is last in array
        });
        
    } catch (err) {
        console.log(err);
    }  
}

//connect DB
mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db ready to seed leagues");
  });

assignLeagueToUser();