const { Gasto } = require('../db');


const getGasto = async () => {
 
  let whereClause = {}; 
  const gastoDb = await Gasto.findAll({
    where: whereClause
  });
    return gastoDb
 
};

module.exports = {getGasto};


