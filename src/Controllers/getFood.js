const { Food } = require('../db');


const getFood = async () => {
 
  let whereClause = {}; 
  const foodDb = await Food.findAll({
    where: whereClause
  });
    return foodDb
 
};

module.exports = {getFood};


