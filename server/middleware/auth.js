const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { secret } = require("../config/settings");
const { whisp, yell, ignore } = require("../helpers/whisper");

module.exports = {
  requireAuth: async (req, res, next) => {
    const token = req.cookies.jwt;
    // check json web token if (exists AND verified)
    if (token) {
      try {
        // if the token is verified
        let decodedToken = await jwt.verify(token, secret);
        // then execute the next middleware
        next();
      } catch (error) {
        // if there's an error, then redirect to login page
        res.redirect("/auth/signin");
      }
    } else {
      res.status(401).json("you must login");
      // res.redirect("/auth/signin");
    }
  },
  checkUser: async (req, res, next) => {
    const token = req.cookies?.jwt;
    if (token) {
      try {
        let decodedToken = await jwt.verify(token, secret);
        // the token is verified :) Now go find into the database the User
        let foundUser = await User.findById(decodedToken.id);
        res.locals.user = foundUser;
        next();
      } catch (error) {
        // the token is not verified
        yell(error.message);
        res.locals.user = null; // to avoid the error "Cannot read properties of undefined (reading 'email')"
        next();
      }
    } else {
      // the token is not set yet ...
      res.locals.user = null;
      next();
    }
  },
};
