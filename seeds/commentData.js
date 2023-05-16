const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Great article!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I agree!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "I disagree with you!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Yeah...nah!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "No way!",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Great article!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Not sure about that!",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;