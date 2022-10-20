const { User, validate } = require('../models/user');
const { Team } = require('../models/team');
const { League } = require('../models/league');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path:"./.env"});
const { faker } = require('@faker-js/faker');

const genAndPopTeams = async (clearTeams = false) => {
  try {
    //get all users
    const allUsers = await User.find({});
    let count = allUsers.length
      //create team for all users
      allUsers.forEach(async (user) => {
        // console.log('USER', user.firstName);
        // console.log('first count', count);
        console.log('*')
        const team = new Team({
          name: `${user.firstName} ${user.lastName}'s ${faker.lorem.word()}s`,
          league: user.leagues[0]._id,
          owner: user._id, 
          roster: []
        });
        //reset users teams
        user.teams = []
        

        if (!clearTeams) {
          team.save();
          user.teams.push(team._id);
          await relateTeamToLeague(user, team);
        }
         //save user with team
         user.save((err, result) => {
          console.log('***')
          if (err) {
            console.log('****')
            // console.log('err saving', err.message);
            return
          }
          else {
            console.log('*****')
            // console.log('DONE =>', user.firstName);
            count -= 1;
            // console.log('count', count);
            if (count == 0) {
              console.log('******')
              completeConnection(clearTeams);
              // console.log('MOGO DISCONNECTED');
              return;
            }
          } 
        });
      });
  } catch (err) {
    console.log(err);
  }
}

const relateTeamToLeague = async (user, team) => {
  console.log(user.leagues);
  const league = await League.findById(user.leagues[0]._id);
  league.teams.push(team._id);
  league.save();
}

// to be able to handle await in foreach loop async
const completeConnection = async (clearTeams) => {
  if (clearTeams) {
    await League.collection.drop();
    await Team.collection.drop();
    mongoose.disconnect();
  } else {
    mongoose.disconnect();
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
  
  // // populate teams
  genAndPopTeams();
  
  // erase teams
  // genAndPopTeams(true);