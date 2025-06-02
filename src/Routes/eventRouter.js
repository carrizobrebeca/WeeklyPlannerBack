const { Router } = require("express");
const { getEventHandler, postEventHandler } = require("../Handlers/eventHandler");


const eventRouter = Router();

eventRouter.get("/", getEventHandler);
eventRouter.post("/", postEventHandler);


module.exports = eventRouter;
