const { Router } = require("express");
const { getPostsHandler, postPostHandler } = require("../Handlers/postHandler");



const postRouter = Router();

postRouter.get("/", getPostsHandler);
postRouter.post("/", postPostHandler);


module.exports = postRouter;