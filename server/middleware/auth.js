const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");

    const decodeToken = await jwt.verify(token, SECRET_KEY);
    console.log(decodeToken);

    const { userId } = await decodeToken;
    req.user = userId;
    next();
  } catch (err) {
    console.log(err);

    res.status(500).json("Server Error");
  }
};
