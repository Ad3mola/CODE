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
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) =>
      res.render("index", {
        blogs: result,
        title: "Home",
      })
    )
    .catch((err) => console.log(err));
  // res.render("index", {
  //   blogs: [
  //     {
  //       id: 1,
  //       title: "jbfihbvibrei vih erihirvb",
  //       body: "neijbfhbeibw icv iwhefibeibfiebfiurihfurbufbr",
  //       createdAt: "thursday, aug 10, 2020",
  //     },
  //     {
  //       id: 2,
  //       title: "jbfihbvibrei vih erihirvb",
  //       body: "neijbfhbeibw icv iwhefibeibfiebfiurihfurbufbr",
  //       createdAt: "thursday, aug 10, 2020",
  //     },
  //     {
  //       id: 3,
  //       title: "jbfihbvibrei vih erihirvb",
  //       body: "neijbfhbeibw icv iwhefibeibfiebfiurihfurbufbr",
  //       createdAt: "thursday, aug 10, 2020",
  //     },
  //     {
  //       id: 4,
  //       title: "jbfihbvibrei vih erihirvb",
  //       body: "neijbfhbeibw icv iwhefibeibfiebfiurihfurbufbr",
  //       createdAt: "thursday, aug 10, 2020",
  //     },
  //   ],
  //   title: "Home",
  // });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.post("/add-blog", (req, res) => {
  const blog = new Blog(req.body);
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
app.get("/add-blog", (req, res) => {
  res.render("add-blog", { title: "Add Articles" });
});

app.get("/blog-details/:title", (req, res) => {
  const title = req.params.title.replace("-", " ");
  Blog.find({ title })
    .then((result) => {
      res.render("blog-details", { title: "Blog Details", blog: result });
      // res.json(result);
    })
    .catch((err) => console.log(err));
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 | Not Found" });
});

// app.listen(PORT, () =>
//   // exec(`start chrome --kiosk http://localhost:${PORT}/`)
//   console.log("app has started")
// );
