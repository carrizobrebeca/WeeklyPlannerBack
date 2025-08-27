const { Router } = require("express");
const { postGastoHandler, getGastoHandler } = require("../Handlers/gastoHandler");

const gastoRouter = Router();

gastoRouter.get("/", getGastoHandler);
gastoRouter.post("/", postGastoHandler);

module.exports = gastoRouter;