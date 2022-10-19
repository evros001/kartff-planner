const { User } = require('../models/user');
const { League } = require('../models/league');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path:"./.env"});

//TODO: get all users on test db
const allUsers = User.find({});
console.log('ALL USERS >> ', allUsers)l
    // create new league
    // assign league id to user

// update users in db