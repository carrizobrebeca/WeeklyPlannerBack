const { ToDo } = require('../db');


const getToDoRow = async (idToDo) => {
 

  const toDoDb = await ToDo.findAll({
    where: {
      idToDo: idToDo
    }
  });
  return toDoDb;
 
};

module.exports = {getToDoRow};


