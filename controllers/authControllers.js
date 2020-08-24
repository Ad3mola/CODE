const keys = require("../config/keys");
const User = require("../models/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "email already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
    return errors;
  }
};

// const signin = (req, res) => {
//   User.findOne({ email: req.body.email })
//     .populate("roles", "-__v")
//     .exec((err, user) => {
//       if (err) {
//         return res.status(500).send({ message: err });
//       }

//       if (!user) {
//         return res.status(404).send({ message: "user not found" });
//       }

//       const passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );

//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "invalid password",
//         });
//       }
//       const token = jwt.sign({ id: user.id }, keys.secretKey, {
//         expiresIn: 86400,
//       });
//       const authorities = [];
//       for (let i = 0; i < user.roles.length; i++) {
//         authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
//       }
//       res.status(200).send({
//         id: user._id,
//         email: user.email,
//         roles: authorities,
//         accessToken: token,
//       });
//     });
// };
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, keys.secretKey, {
    expiresIn: maxAge,
  });
};

module.exports.login_get = (req, res) => {
  res.render("login", { title: "Login" });
};
module.exports.login_post = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("new login");
};

module.exports.register_get = (req, res) => {
  res.render("register", { title: "Register" });
};

module.exports.register_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
  // console.log(req);
  // const { email, password } = req.body;
  // console.log(email, password);
  // res.send("new registration");
};
