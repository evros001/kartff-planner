const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({path:"./.env"});
const cors = require('cors')

const app = express();

app.use(express.json());

//port
const PORT = process.env.PORT || 5500;
//use cors
app.use(cors());

//import routes
const NflPlayersRoutes = require('./routes/nflPlayers');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

//connect DB
mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("ERROR: ", err);
    });

app.use('/', NflPlayersRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// add port and connect to server
app.listen(PORT, () => { console.log("Server connected") });

