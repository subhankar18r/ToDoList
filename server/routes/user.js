const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/signup", handleUserSignup).post("/login", handleUserLogin);

module.exports = userRouter;
