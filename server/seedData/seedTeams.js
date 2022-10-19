const { User, validate } = require('../models/user');
const { Team } = require('../models/team');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path:"./.env"});
const { faker } = require('@faker-js/faker');

const genAndPopTeams = async (clearTeams = false) => {
  try {
    //get all users
    const allUsers = await User.find({});
      //create team for all users
      allUsers.forEach((user) => {
        console.log('USER', user.firstName);
        count = allUsers.length
        const team = new Team({name: `${user.firstName} ${user.lastName}'s ${faker.lorem.word()}s`, owner: `${user.firstName} ${user.lastName}`, roster: []})
        if (!clearTeams) {
          if (user.teams.length > 0) {
            user.teams = []
          }
          user.teams.push(team);
        } else if (clearTeams) {
          if (user.teams.length >= 0) {
            user.teams = []
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

  genAndPopTeams();