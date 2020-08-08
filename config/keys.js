let keys = {};

if (process.env.NODE_ENV === "production") {
  keys = {
    mongoURI: process.env.MONGO_URL,
  };
} else {
  keys = {
    mongoURI: require("./devKeys"),
  };
}
module.exports = keys;
