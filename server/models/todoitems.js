//import mongoose to create new Schema
const mongoose = require('mongoose');

//create schema
const TodoItemSchema = new mongoose.Schema({
    item:{type: String, required: true }    
})

// export Schema
module.exports = mongoose.model('todo', TodoItemSchema);
