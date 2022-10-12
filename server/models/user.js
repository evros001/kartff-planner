const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const { array } = require('joi');

//from https://www.youtube.com/watch?v=HGgyd1bYWsE&ab_channel=CyberWolves

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  leagues: {type: Array, required: true},
  teams: {type: Array, required: true}
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({_id: this._id}, process.env.JWT_PRIVATE_KEY, {expiresIn: "7d"})
  return token
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  console.log('VALIDATE DATA MODEL', data);
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    leagues: Joi.array().required(),
    teams: Joi.array().required()
  });

  return schema.validate(data);
}

module.exports = {User, validate}
