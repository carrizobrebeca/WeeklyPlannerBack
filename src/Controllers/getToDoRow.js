const { ToDoRow } = require('../db');


const getToDoRow = async (idToDo) => {
 

  const toDoDb = await ToDoRow.findAll({
    where: {
      idToDo: idToDo
    }
  });
  return toDoDb;
 
};

module.exports = {getToDoRow};


