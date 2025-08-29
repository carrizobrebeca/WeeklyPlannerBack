const { Router } = require("express");
const { putWeeklyHandler, postWeeklyHandler, getWeeklyHandler } = require("../Handlers/weeklyHandler");



const weeklyRouter = Router();

weeklyRouter.get("/", getWeeklyHandler);
weeklyRouter.put("/:hour", putWeeklyHandler);
weeklyRouter.post("/", postWeeklyHandler);

module.exports = weeklyRouter;