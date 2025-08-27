const { ToDoRow } = require("../db");

const postToDoRow = async (title) => {

     return await ToDoRow.create({ title});
};

module.exports = postToDoRow;