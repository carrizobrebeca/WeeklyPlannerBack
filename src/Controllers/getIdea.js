const { Idea } = require('../db');


const getIdea = async () => {
 
  let whereClause = {}; 
  const ideaDb = await Idea.findAll({
    where: whereClause
  });
    return ideaDb
 
};

module.exports = {getIdea};


