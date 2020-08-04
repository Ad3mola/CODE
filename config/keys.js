if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: process.env.MONGO_URL,
  };
} else {
  module.exports = {
    mongoURI:
      "mongodb+srv://Ademola:axel68m@node-blog.6i1mx.mongodb.net/node-blog?retryWrites=true&w=majority",
  };
}
