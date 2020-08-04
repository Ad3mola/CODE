var exec = require("child_process").exec;
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const Blog = require("./models/blog");

const app = express();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(PORT, () =>
      // exec(`start chrome --kiosk http://localhost:${PORT}/`)
      console.log("app has started")
    )
  )
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.render("index", {
  //   blogs,
  //   title: "Home",
  // });
  Blog.find()
    .then((result) =>
      res.render("index", {
        blogs: result,
        title: "Home",
      })
    )
    .catch((err) => console.log(err));
});

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Third Blog",
    snippets: "this is my second node blog...",
    body:
      "this is amazing and I don't even have anymore text, now what do I do this is amazing and I don't even have anymore text, now what do I dothis is amazing and I don't even have anymore text, now what do I dothis is amazing and I don't even have anymore text, now what do I dothis is amazing and I don't even have anymore text, now what do I dothis is amazing and I don't even have anymore text, now what do I dothis is amazing and I don't even have anymore text, now what do I dothis is amazing and I don't even have anymore text, now what do I do ",
  });
  blog
    .save()
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
});

app.get("/delete-blog/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
});

app.get("/saved-articles", (req, res) => {
  res.render("saved-articles", { title: "Saved Articles" });
});
app.get("/search", (req, res) => {
  res.render("search", { title: "Search Articles" });
});

app.get("/blog-details/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  Blog.findById(id)
    .then((result) =>
      res.render("blog-details", { title: "Blog Details", blog: result })
    )
    .catch((err) => console.log(err));
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 | Not Found" });
});

// app.listen(PORT, () =>
//   // exec(`start chrome --kiosk http://localhost:${PORT}/`)
//   console.log("app has started")
// );
