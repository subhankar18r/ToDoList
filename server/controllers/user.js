const User = require("../models/userModel");
const { setUserToken } = require("../service/auth");

async function handleUserSignup(req, res) {
  try {
    const { username, email, password } = req.body;
    
    const usernameExists = await User.findOne({ username: username });
    if (usernameExists) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const user = await User.create({ username, email, password });
    if (user) {
      const token = setUserToken({ username, email });
      return res.status(201).json({ token });
    }

    return res.status(400).json({ error: "Invalid user data" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = setUserToken({ username: user.username, email: user.email });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = { handleUserSignup, handleUserLogin };
