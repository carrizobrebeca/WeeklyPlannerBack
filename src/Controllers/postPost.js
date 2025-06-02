const { Post } = require("../db");

const postPost = async (image, description, userId, eventId) => {
  

     return await Post.create({ image, description, userId, eventId});
};

module.exports = postPost;
