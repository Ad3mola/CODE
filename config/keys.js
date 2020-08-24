let keys = {};

if (process.env.NODE_ENV === "production") {
  keys = {
    mongoURI: process.env.MONGO_URL,
    secretKey: process.env.SECRET_KEY,
  };
} else {
  keys = require("./devKeys");
}
module.exports = keys;
