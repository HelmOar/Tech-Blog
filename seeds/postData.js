const { Post } = require("../models");

const postData = [
  {
    title: "First Blog Post",
    content: "First blog post content.",
    user_id: 1,
  },
  // add more posts here
  {
    title: "Second Blog Post",
    content: "Second blog post content.",
    user_id: 2,
  },
  {
    title: "Third Blog Post",
    content: "Third blog post content.",
    user_id: 3,
  },
  {
    title: "Fourth Blog Post",
    content: "Forth blog post content.",
    user_id: 4,
  },
  {
    title: "Fifth Blog Post",
    content: "Fifth blog post content.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;