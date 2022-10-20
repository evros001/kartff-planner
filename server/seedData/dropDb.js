const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path:"./.env"});
const { League } = require('../models/league');
const { Team } = require('../models/team');
const { User } = require('../models/user');

const dropCollection = async (collectionModel) => {
    await collectionModel.collection.drop();
    console.log("collection DROPPED", collectionModel);
}

const dropCollections = async (collections, dropCollection) => {
    console.log("collections", collections);
    collections.forEach(async collection => {
        console.log("collection", collection);
        await dropCollection(collection);
    });
}

// const processDropCollections = async (collections, dropCollection) => {
//     await dropCollections(collections, dropCollection);
//     mongoose.disconnect();
// }

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

dropCollections([Team, League, User], dropCollection);
// processDropCollections([Team, League, User], dropCollections);