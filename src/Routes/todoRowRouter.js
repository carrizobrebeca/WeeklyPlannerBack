const { Router } = require("express");
const { getToDoRowHandler, postToDoRowHandler } = require("../Handlers/toDoRowHandler");

const todoRowRouter = Router();

todoRowRouter.get("/:idToDo", getToDoRowHandler);
todoRowRouter.post("/", postToDoRowHandler);

module.exports = todoRowRouter;