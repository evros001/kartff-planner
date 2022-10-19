const { User, validate } = require('../models/user');
const { League } = require('../models/league');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path:"./.env"});

//TODO save() every team to get league collection

const assignLeagueToUser = async (clearLeagues = false) => {
    //get all users on test db
    try {
        //get all users
        const allUsers = await User.find({});
        const allLeagues = await League.find({});
        
        //generate only two league
        const leagueOne = new League({name: 'Kart League', commisioner: 'kartleague@test.com', teams: []})
        const leagueTwo = new League({name: 'Actuary League', commisioner: 'actuaryleague@test.com', teams: []});
        
        if (allLeagues.length <= 0) {
          leagueOne.save();
          leagueTwo.save();
        } else {
          League.collection.drop();
        }
        
        //add league to each user at random
        allUsers.forEach((user) => {
            count = allUsers.length
            const coin = Math.round(Math.random());
            const whichLeague = coin > 0 
                ? leagueOne
                : leagueTwo
            console.log('user', user.firstName);
            
            //force one league per user
            if (!clearLeagues) {
              if (user.leagues.length > 0) {
                user.leagues = []
              }
              user.leagues.push(whichLeague);
            } else if (clearLeagues) {
              if (user.leagues.length >= 0) {
                user.leagues = []
              }
            }
            
            //save user with league
            user.save((err, result) => {
              if (err) {
                console.log('err saving', err.message);
                return
              }
              else {
                console.log('DONE =>', user.firstName);
                count -= 1;
                if (count == 0) {
                  mongoose.disconnect();
                  console.log('MOGO DISCONNECTED');
                  return;
                }
              } 
            });

            
        });
        //TODO: find way to discontect after all people hav been updated and saved
        
    } catch (err) {
        console.log(err);
    }  
}

generateUserTeamsForLeague = async (genLeagues) => {
  await genLeagues();

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

// populate leagues
assignLeagueToUser();
// erase leagues
// assignLeagueToUser(true);