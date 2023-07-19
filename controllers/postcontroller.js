const express = require("express");
const Post = require("./models/Post");
const PostController = require("./controllers/PostController");

app.use("/posts", PostController);

app.listen(3000);

module.exports = {
  store: (req, res) => {
    const { username, password } = req.body;

    const post = new Post({
      username,
      password,
    });

    post.save((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },
};