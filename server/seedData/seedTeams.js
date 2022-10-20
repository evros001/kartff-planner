const { User, validate } = require('../models/user');
const { Team } = require('../models/team');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path:"./.env"});
const { faker } = require('@faker-js/faker');

const genAndPopTeams = async (clearTeams = false) => {
  try {
    //get all users
    const allUsers = await User.find({});
    let count = allUsers.length
      //create team for all users
      allUsers.forEach((user) => {
        // console.log('USER', user.firstName);
        // console.log('first count', count);
        console.log('*')
        const team = new Team({name: `${user.firstName} ${user.lastName}'s ${faker.lorem.word()}s`, owner: `${user._id} ${user.lastName}`, roster: []});
        //reset users teams
        user.teams = []

        if (!clearTeams) {
          team.save();
          user.teams.push(team);
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

// to be able to handle await in foreach loop async
const completeConnection = async (clearTeams) => {
  if (clearTeams) {
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
  // genAndPopTeams();
  // erase teams
  genAndPopTeams(true);