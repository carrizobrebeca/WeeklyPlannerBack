const {Router} = require('express');

const gastoRouter = require('./gastoRouter');
const ideaRouter = require('./ideaRouter');
const noteRouter = require('./noteRouter');
const todoRouter = require('./todoRouter');
const foodRouter = require('./foodRouter');
const weeklyRouter = require('./weeklyRouter');
const reminderRouter = require('./reminderRouter');
const reminderRowRouter = require('./reminderRowRouter');
const todoRowRouter = require('./todoRowRouter');

const router = Router();

router.use("/gasto", gastoRouter);
router.use("/idea", ideaRouter);

router.use("/food", foodRouter );
router.use("/weekly", weeklyRouter);

router.use("/note", noteRouter);
router.use("/reminder", reminderRouter);
router.use("/reminderrow", reminderRowRouter);
router.use("/todo", todoRouter);
router.use("/todorow", todoRowRouter);
 module.exports = router;

 