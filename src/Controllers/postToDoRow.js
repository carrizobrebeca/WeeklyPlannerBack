const { ToDoRow } = require("../db");

const postToDoRow = async (name, trimeEnd, idToDo) => {

     return await ToDoRow.create({ name, trimeEnd, idToDo});
};

module.exports = postToDoRow;