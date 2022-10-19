const { User, validate } = require('../models/user');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path:"./.env"});
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

const genHashPassword = async () => {
  const password = faker.internet.password();
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashPassword = await bcrypt.hash(password, salt);
  return [ hashPassword, password ] 
}

const users = []

// generate users with hashed password up to N users
const genUsers = async (numberOfUsers = 0) => {
  let counter = numberOfUsers;
  while (counter > 0) {
    const [ hashPassword, password ] = await genHashPassword();
    console.log('gen password', hashPassword);
    
    const newUser = new User({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: hashPassword,
      leagues: [],
      teams: [],
      testLogin: password,
    });
    
    users.push(newUser);
    console.log('Users Arr =', users);
    
    counter -= 1;
  }
}

//connect mongoose
//connect DB
mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db ready to seed users");
  });

//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
genUsers(20).then(() => {
  users.map(async (user, index) => {
    try {
      validate(user);
      await user.save((err, result) => {
        if (index === users.length - 1) {
          console.log("DONE!", user);
          mongoose.disconnect();
        }
      });
    } catch(err) {
      console.log("SEED USERS ERROR", err);
    }
  });
});