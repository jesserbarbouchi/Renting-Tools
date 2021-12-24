// path inside the require should not be "User" (1st letter capitalize)
// or we will have the following error:
// MongooseError [OverwriteModelError]: Cannot overwrite `User` model once compiled.
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { maxAge, secret } = require("../config/settings");
const { testerEmail } = require("../config/settings").email;
const ResetPassword = require("../models/resetPassword");

const { simplifyError } = require("../helpers/errorParser");
const { loginParser } = require("../helpers/loginParser");
const { gMailer } = require("../helpers/nodeMailer");
const { yell } = require("../helpers/whisper");

const createToken = (id) => {
  return jwt.sign({ id }, secret, {
    expiresIn: maxAge,
  });
};

// prettier-ignore
module.exports = {
    signin: async (req, res, next) => {
      const { username_or_email , password } = req.body
      let filter = loginParser(username_or_email.toLowerCase()) // login should always be lowercase

      try {
        const loggedInUser = await User.login(filter, password)

        const token = createToken(loggedInUser._id)
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 , sameSite: true })

        const response = { user: loggedInUser , jwt: token }
        res.status(201).json(response)
      } catch (error) {
        yell(error);
        res.status(201).json(simplifyError(error))
      }
    },

    signup: async (req, res, next) => {
        const newUser = { username, fullName, email, phoneNumber, password, city} = req.body;
        try {
          const savedUser = await User.create(newUser);
          const foundUser = await User
                              .findById(savedUser._id)
                              .select("-password");

          // const { websiteName, websiteURL, subject, mailerParams, htmlFormat } = mailerParams
          // let mailerParams = { websiteName, websiteURL, subject, textFormat, htmlFormat, fullName, email };
          mailerParams={}
          mailerParams.fullName = fullName
          mailerParams.email = email
          // mailerParams.username = username
          gMailer(req.body.mailerParams, "signup")

          res.status(201).json(foundUser);
        } catch (error) {
            res.status(400).json(simplifyError(error));
        }
    },

    logout: async (req, res, next) => {
        // setting the content of the cookie called "jwt" to an empty string & setting its maxAge to 1 milliseconds
        res.cookie("jwt", "", { maxAge: 1 })
        res.status(201).json("disconnected")
    },

    forgotPassword: async (req, res) => {
      let { email, mailerParams } = req.body;
      if(!email) email = testerEmail

      try {
        let foundUser = await User.findOne({ email })
        if(foundUser){
          let hash_link = require("crypto").randomBytes(64).toString("hex")
          // if the hash_link already exists in the databse, then generate a new hash_link
          while (await ResetPassword.findOne({ hash: hash_link })) {
            // generate a new random hash_link (very long haxadecimal string)
            hash_link = require("crypto").randomBytes(64).toString("hex")
          }
          // creating a new password reseter
          const resetPassword = {
            id: foundUser._id,
            email,
            hash: hash_link,
          }

          // save the password reseter into the database
          const createdResetPassword = await ResetPassword.create(resetPassword);

          // const { websiteName, websiteURL, subject, mailerParams, htmlFormat } = mailerParams
          if(!mailerParams) mailerParams = {}
          mailerParams.fullName = foundUser.fullName
          mailerParams.email = email
          mailerParams.hash_link = hash_link
          gMailer(mailerParams, "signup")

          res.status(201).json("We've sent to you an email containing new link for reseting password for your teacher account")
        } else {
          res.send("That email is not registered");
        }
      } catch (error) {
        yell(error)
        res.send(error)
      }
    },

    getResetPassword_UI: async (req, res) => {
      const { hash_link } = req.params;
      res.status(200).send(hash_link);
    },

    executeResetPassword: async (req, res) => {
      const { hash_link, password } = req.body
      try {
        const foundResetPassword = await ResetPassword.findOne({ hash_link })
        const foundUser = await User.findOne({ email: foundResetPassword.email });
        const hashedPassword = await bcrypt.hash(password, 10);
        const updatedUser = await User.findByIdAndUpdate(
          { _id: foundUser._id },
          { password: hashedPassword },
          { new: true }
        ).select("-password")
        res.status(201).json(updatedUser);
      } catch (error) {
        yell(error);
        res.status(201).json(error);
      }
    },

    changePassword: async (req, res) => {
      try {
        const { userId } = req.params
        const { oldPassword, newPassword } = req.body
        const updatedUser = await User.login(userId, oldPassword, newPassword)
        res.status(201).json(updatedUser);
      } catch (error) {
        yell(error)
        res.status(404).json(simplifyError(error))
      }
    }
};
