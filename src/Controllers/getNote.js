const { Note } = require('../db');


const getNote = async () => {
 
  let whereClause = {}; 
  const noteDb = await Note.findAll({
    where: whereClause
  });
    return noteDb
 
};

module.exports = {getNote};


