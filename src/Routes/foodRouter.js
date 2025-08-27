const { Router } = require("express");
const { putFoodHandler, postFoodHandler, getFoodHandler } = require("../Handlers/foodHandler");

const foodRouter = Router();

foodRouter.get("/", getFoodHandler);
foodRouter.put("/", putFoodHandler);
foodRouter.post("/", postFoodHandler);

module.exports = foodRouter;