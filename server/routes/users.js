const router = require('express').Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const {error} = validate(req.body);
    if (error) {
      console.log(`oops error = ${error}`);
      return res.status(400).send({message: error.details[0].message});
    }
    //user already exists
    const user = await User.findOne({email: req.body.email});
    if (user) {
      console.log(`${user} already exists`);
      return res.status(409).send({message: "User with given email already exists"});
    }

    //create user
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log('###########################################################', req.body);

    await new User({...req.body, password: hashPassword}).save();
    res.status(201).send({message: "User successfully created"});
  } catch (err) {
    console.log('POST USER 500 ERROR = ', err)
    res.status(500).send({message: "Internal Server Error"});
  }
});

router.get('/all', async (req, res) => {
  const allUsers = await User.find({})
  res.status(200).json(allUsers);
})

console.log("USERS ROUTE IN USE")

module.exports = router;
