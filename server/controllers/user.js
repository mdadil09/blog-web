const User = require("../Models/userSchema");

const bcrypt = require("bcryptjs");
const { generateToken } = require("../config/generateToken");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (!firstName || !lastName || !email || !password) {
      res.status(400).send("Please Enter All the fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).send("User already exists!");
    }

    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
    });

    if (user) {
      res.status(201).json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        res.status(401).send("email/password is wrong");
      }
      const token = generateToken(user._id);
      res.status(200).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: token,
      });
    } else {
      res.status(401).send("Invalid Email");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("User and Password is wrong");
  }
};

module.exports = {
  registerUser,
  loginUser,
};
