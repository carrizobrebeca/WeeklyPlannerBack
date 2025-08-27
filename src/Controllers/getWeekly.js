const { Weekly } = require('../db');


const getWeekly = async () => {
 
  let whereClause = {}; 
  const weeklyDb = await Weekly.findAll({
    where: whereClause
  });
    return weeklyDb
 
};

module.exports = {getWeekly};


