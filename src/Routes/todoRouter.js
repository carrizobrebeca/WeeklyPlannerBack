const { Router } = require("express");
const { getToDoHandler, postToDoHandler } = require("../Handlers/toDoHandler");


const todoRouter = Router();

todoRouter.get("/", getToDoHandler);
todoRouter.post("/", postToDoHandler);

module.exports = todoRouter;