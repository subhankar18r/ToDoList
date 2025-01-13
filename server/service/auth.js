const jwt = require("jsonwebtoken");
const jwtSecret = "9VdZ3NVsGD";

function setUserToken(user) {
  return jwt.sign({ user }, jwtSecret);
}

function getUserFromToken(token) {
  try {
    const { user } = jwt.verify(token, jwtSecret);
    return user;
  } catch (error) {
    return null;
  }
}

module.exports = { setUserToken, getUserFromToken };
