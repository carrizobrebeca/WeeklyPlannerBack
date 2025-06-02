const { Post } = require('../db');


const getPost = async () => {
 
  let whereClause = {}; 
  const postDb = await Post.findAll({
    where: whereClause
  });
    return postDb
 
};

module.exports = {getPost};


