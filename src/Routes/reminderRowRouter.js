const { Router } = require("express");
const { getReminderRowHandler, postReminderRowHandler } = require("../Handlers/reminderRowHandler");

const reminderRowRouter = Router();

reminderRowRouter.get("/", getReminderRowHandler);
reminderRowRouter.post("/", postReminderRowHandler);

module.exports = reminderRowRouter;