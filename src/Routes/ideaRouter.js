const { Router } = require("express");
const { getIdeaHandler, postIdeaHandler } = require("../Handlers/ideaHandler");


const ideaRouter = Router();

ideaRouter.get("/", getIdeaHandler);
ideaRouter.post("/", postIdeaHandler);

module.exports = ideaRouter;