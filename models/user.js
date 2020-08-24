const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a passsword"],
    minlength: [6, "minimum password length is 6 characters"],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  console.log(this, "pre");
  next();
});
userSchema.post("save", function (doc, next) {
  console.log(doc, "post");
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
