const router = require('express').Router();
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const {error} = validate(req.body);
    if (error) {
      return res.status(400).send({message: error.details[0].message});
    }

    const user = await User.findOne({email: req.body.email});
    console.log("SERVER USER", user);
    // const sanitizedUser = {"firstName": user.firstName, "lastName": user.lastName, "email": user.email, "leagues": user.leagues ,"teams": user.teams}
    
    if (!user) {
      return res.status(401).send({message: "Invalid Email or Password"});
    }

    const validPassword = await bcrypt.compare(
      req.body.password, user.password
    )
    if (!validPassword) {
      return res.status(401).send({message: "Invalid Email or Password"});
    }

    //if email and pw are valid
    const token = user.generateAuthToken();
    // res.status(200).send({data: token, user: sanitizedUser, message: "Logged in successfully"});
    res.status(200).send({data: token, message: "Logged_in_successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).send({message: "Internal Server Error"});
  }
});

router.get('/', async (req, res) => {
  const token = JSON.parse(req.headers.authorization.split(" ")[1]);
  console.log("REQ IN GET JWT", token.data);
  const secret = process.env.JWT_PRIVATE_KEY
  try {
    const user = jwt.verify(token.data, secret);
    console.log("DECODED USER FROM JWT", user);
    const userInformation = await User.findOne({_id: user._id});
    console.log("DECODED userInformation FROM JWT", userInformation);
    const sanitizedUserInfo = {
      firstName: userInformation.firstName,
      lastName: userInformation.lastName,
      email: userInformation.email,
      leagues: userInformation.leagues,
      teams: userInformation.teams
    };
    return res.status(200).send({user: sanitizedUserInfo});
  } catch (err) {
    console.log("ERROR VERIFYING USER FROM JWT", err);
  }  
})

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password") 
  });
  return schema.validate(data);
}

module.exports = router;
