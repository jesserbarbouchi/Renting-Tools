const mongoose = require("mongoose");
const { isEmail, isAlpha } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
      unique: [
        true,
        "There's already an account registered with that username",
      ],
      lowercase: true,
    },
    fullName: {
      type: String,
      required: [true, "Please enter your full name"],
      validate: [isAlpha, "Please enter a valid full name"],
    },
    // firstName: {
    //   type: String,
    //   required: [true, "Please enter your first name"],
    //   validate: [isAlpha, "Please enter a valid first name"],
    // },
    // lastName: {
    //   type: String,
    //   required: [true, "Please enter your family name"],
    //   validate: [isAlpha, "Please enter a valid last name"],
    // },
    email: {
      type: String,
      // required: [true, "Please enter an email"],
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    city: {
      type: String,
      required: [true, "Please select your city"],
      lowercase: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, "Please enter your phone number"],
      // minlength: [8, "Please enter a valid number"],
      // maxlength: [8, "Please enter a valid number"]
      default: 54686858,
    },
    password: {
      type: String,
      // required: [true, "Please enter a password"],
      minlength: [2, "Minimum password length is 8 characters"],
    },
    profileImageURI: {
      type: String,
      default:
        "https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg",
    },
    banned: {
      type: Boolean,
      default: false,
    },
    ownedTools: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tool", // each element correspond to 1 Tool (in singular) ... and not Toolzzz
      },
    ],
    rentedTools: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tool", // each element correspond to 1 Tool (in singular) ... and not Toolzzz
      },
    ],
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
    bannedAt: [
      {
        type: Date,
      },
    ],
    unbannedAt: [
      {
        type: Date,
      },
    ],
  },
  { versionKey: false } // to not save the __v attribute ... // Source: https://mongoosejs.com/docs/guide.html#versionKey
);

// prettier-ignore
userSchema.statics.login = async function (username, plainTextPassword) {
  // instead of doing User.findOne(filter) ..., we do this.findOne(filter)
  // the "this" keyword refer to the actual model, which is the User model
  const foundUser = await this.findOne(filter);
  if (foundUser) {
    const success = await bcrypt.compare(plainTextPassword, foundUser.password);
    // if the compared password with the hashed one is true
    if (success) {
      // then return the user info
      const loggedInUser = this
                              .findById({ _id: foundUser._id })
                              .select("-password"); // but without selecting password
      return loggedInUser;
    }

    // if the password is not correct
    // then throw an error that will be catched only by the catch block
    // inside login controller (inside the /auth/signin)
    throw Error("Incorrect password");
  } else {
    // So here ... the specified filter is not found inside the databse, because (foundUser === null)

    // Check if the attribute called "username" is inside the filter object
    if ("username" in filter) {
    // then throw an error that will be catched only by the catch block
    // inside login controller (inside the /auth/signin)
    throw Error("Incorrect username");
    }

    // Check if the attribute called "username" is inside the filter object
    if ("email" in filter) {
      // then throw an error that will be catched only by the catch block
      // inside login controller (inside the /auth/signin)
      throw Error("Incorrect email");
    }
  }

};

//prettier-ignore
userSchema.statics.changePassword = async function (_id, plainTextPassword, newPassword) {
  // instead of doing User.findOne(filter) ..., we do this.findOne(filter)
  // the "this" keyword refer to the actual model, which is the User model
  const foundUser = await this.findById({ _id });
  if (foundUser) {
    const success = await bcrypt.compare(plainTextPassword, foundUser.password);
    // if the compared password with the hashed one is true
    if (success) {
      // then only update the password & return the user info
      this.password = await bcrypt.hash(this.password, 10);
      const updatedUser_Without_Password = this
                                    .findByIdAndUpdate(
                                      { _id: foundUser.password },
                                      { password },
                                      { new: true }
                                    ).select("-password"); // but without selecting password

      return updatedUser_Without_Password;
    }

    // if the password is not correct
    // then throw an error that will be catched only by the catch block
    // inside login controller (inside the /auth/signin)
    throw Error("Incorrect password");
  }

};

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);
