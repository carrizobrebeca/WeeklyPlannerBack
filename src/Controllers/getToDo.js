const { ToDo } = require('../db');


const getToDo = async () => {
 
  let whereClause = {}; 
  const toDoDb = await ToDo.findAll({
    where: whereClause
  });
    return toDoDb
 
};

module.exports = {getToDo};
