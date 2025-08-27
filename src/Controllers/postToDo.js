const { ToDo } = require("../db");

const postToDo = async (title) => {

     return await ToDo.create({ title});
};

module.exports = postToDo;