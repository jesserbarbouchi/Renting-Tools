var User = require("../models/user");
var bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const { whisp, gossip, yell, ignore } = require("../helpers/whisper");
ignore(gossip);

// prettier-ignore
module.exports = {
  find_All: async (req, res) => {
    try {
      whisp("Requesting the server to give me all users from the database ...");
      // the server will try the following
      const foundUsers = await User
                            .find()
                            .populate(["ownedTools","rentedTools"])
                            .select("-password");

      res.status(200).send(foundUsers);
    } catch (error) {
      yell(error)
      next(error)
      // res.status(500).send(error);
    }
  },
  create_A_New_One: async (req, res) => {// ONLY USED BY ADMIN !!!!!
    // the admin will be able to create a new user, but the password will be generated randomly then hashed
    try {
        whisp("Requesting the server to save user into the database ...")
        const { username, fullName, email, phoneNumber } = req.body
        const newUser = { username, fullName, email, phoneNumber }
        let hashed_password = await bcrypt.hash(`${Math.random() * 10 ** 20}`, 10);
        newUser.password = hashed_password;
        // https://mongoosejs.com/docs/models.html#constructing-documents
        const savedUser = await User.create(newUser);
        const foundUser = await User.findById({ _id: savedUser._id }).select("-password")

        res.status(201).json(foundUser);
    } catch (error) {
      yell(error)
      res.status(201).json(error); // must send to the user that the username is already taken
      // next(error);
    }
  },
  find_One: async (req, res) => {
    const { userId } = req.params
    try {
      whisp("Requesting the server to give me a specific user from the database ...");
      // the server will try the following
      const foundUser = await User
                              .findById({ _id: userId })
                              .populate(["ownedTools","rentedTools"])
                              .select('-password')

      res.status(200).json(foundUser);
    } catch (error) {
      yell(error)
      res.status(201).json(error); // must send to the user that the username is already taken
      // next(error);
    }
  },
  update_One: async (req, res) => {
    const { userId } = req.params
    const user = { username, fullName, email, phoneNumber, profileImageUri, banned } = req.body
    for(attribute in user){
      // delete the attribute that contains empty string or falsy value
      if(!user[attribute]) delete user[attribute]
    }

    try {
      whisp("Requesting the server to update a specific user into the database ...");
      // the server will try the following
      const updatedUser = await User
                          .findByIdAndUpdate({_id: userId}, user, { new: true })
                          .populate(["ownedTools","rentedTools"])
                          .select('-password')

      res.status(200).json(updatedUser)
    } catch (error) {
      yell(error)
      res.status(201).json(error); // must send to the user that the username is already taken
      // next(error);
    }
  },
  remove_One: async (req, res) => {
    const { userId } = req.params
    const user = { username, fullName, email, phoneNumber, profileImageUri, banned } = req.body
    for(attribute in user){
      // delete the attribute that contains empty string or falsy value
      if(!user[attribute]) delete user[attribute]
    }

    try {
      whisp("Requesting the server to update a specific user into the database ...");
      // the server will try the following
      const updatedUser = await User
                          .findByIdAndRemove({_id: userId}, user, { new: true })
                          .populate(["ownedTools","rentedTools"])
                          .select('-password')

      res.status(200).json(updatedUser)
    } catch (error) {
      yell(error)
      res.status(201).json(error); // must send to the user that the username is already taken
      // next(error);
    }
  },
  find_All_Tools_of_Specific_User: async (req, res) => {
    console.log("A")
  },
  create_One_Tool_of_Specific_User: async (req, res) => {
    console.log("A")

  },
  remove_All_Tools_of_Specific_User: async (req, res) => {
    console.log("A")

  },
  find_One_Tool_of_Specific_User: async (req, res) => {
    console.log("A")

  },
  update_One_Tool_of_Specific_User: async (req, res) => {
    console.log("A")

  },
  remove_One_Tool_of_Specific_User: async (req, res) => {
    console.log("A")

  },
  create_a_user: async (req, res) => {
    try {
      const { username, fullname, email, phone_number, password, adrress } =
        req.body;
      const user = new User({
        username,
        fullname,
        email,
        phone_number,
        adrress,
        password,
      });
      if (
        !username ||
        !fullname ||
        !email ||
        !phone_number ||
        !password ||
        !adrress
      )
        return res.status(400).json({ msg: "Please fill in all fields!" });
      const useer = await User.findOne({ email });
      if (useer)
        return res.status(400).json({ msg: "This email already exists" });
      const doc = await user.save();
      console.log(doc);

      res.status(200).send(useer);
    } catch (error) {
      res.status(404).json({ message: "error", error: "error" });
    }
  },
  login_a_user: async (req, res) => {
    try {
      console.log(req.body);
      let { email, password } = req.body;
      console.log(email);
      let user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        return res.json({ msg: "this user doesn't exist" });
      }
      let isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return res.json({ msg: "Wrong password" });
      }
      let token = jwt.sign(
        {
          username: user.username,
          _id: user._id,
        },
        "jwtSecret",
        {
          expiresIn: "1h",
        }
      );

      res.send({
        user,
        token: token,
      });
    } catch (error) {
      res.send(error);
    }
  },



  forgot: async (req, res) => {
    let data = req.body;
    console.log(data.email);
    let smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      port: 465,
      auth: {
        user: "all.in.one.customer.services@gmail.com",
        pass: "Azerty123+",
      },
    });
    let mailOptions = {
      from: "all.in.one.customer.services@gmail.com",
      to: data.email,
      subject: "Message from customer services",
      html: `
		  <h3>thank you for choosing our services</h3>
		  <h3>it reached our attention that you forgot your password for your acount at <a href="http://localhost:4200">toolsforrent.com</a> for resseting your password click this link <h3>
		  <br><br><br><a href="http://localhost:4200/user/forgot">reset my password!</a><br><br><br>
		  <h3>feel free to contact us at our email : customer.service@gmail.com </h3>
		  <h3>or our phone number:54132756</h3>
		  `,
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send(response);
      }
    });
    smtpTransport.close();
  },




  forgotUpdate: async (req, res) => {
    let { email1, password1 } = req.body;
    console.log(email1);
    console.log(password1);
    let salt = await bcrypt.genSalt(10);
    password1 = await bcrypt.hash(password1, salt);
    const updatedUser = await User.findOneAndUpdate(
      { email: email1 },
      { password: password1 },
      { useFindAndModify: false, new: true }
    );
    res.send(updatedUser);
  },

  find_a_user_and_update: async (req, res) => {
    let id = req.params.userId;
    let user = req.body;
    console.log("=====>", id);
    console.log("=====>", user);
    User.findByIdAndUpdate(id, user)
      .then(() => res.send(`${user.fullname} infos are up to date`))
      .catch((error) => res.send(error));
  },



  send_a_message: async (req, res) => {
    console.log(req.body.phone_number);
    const from = "Vonage APIs";
    const to = 216 + "+" + req.body.phone_number;
    const text = "thank you for choosing our service , Rent-A-Tool team";
    vonage.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.");
          res.send("Message sent successfully.");
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
        }
      }
    });
  },



};
