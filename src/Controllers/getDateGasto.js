const { Gasto } = require('../db');


const getDateGasto = async (date) => {
 

  const gastoDb = await Gasto.findAll({
    where: {
      date: date
    }
  });
  return gastoDb;
 
};

module.exports = {getDateGasto};


