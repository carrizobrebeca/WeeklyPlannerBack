const { Router } = require("express");
const { getNoteHandler, postNoteHandler } = require("../Handlers/noteHandler");


const noteRouter = Router();

noteRouter.get("/", getNoteHandler);
noteRouter.post("/", postNoteHandler);

module.exports = noteRouter;