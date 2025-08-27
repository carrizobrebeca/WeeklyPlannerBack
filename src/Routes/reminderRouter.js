const { Router } = require("express");
const { postReminderHandler, getReminderHandler } = require("../Handlers/reminderHandler");



const reminderRouter = Router();

reminderRouter.get("/", getReminderHandler);
reminderRouter.post("/", postReminderHandler);

module.exports = reminderRouter;