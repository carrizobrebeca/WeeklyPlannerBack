const { Post } = require('../db');


 const getPostEvent = async (eventId) => {
  const postDb = await Post.findAll({
    where: {
      eventId: eventId
    }
  });
  return postDb;
};

module.exports = {getPostEvent};


