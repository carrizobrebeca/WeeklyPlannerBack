const {Router} = require('express');

const gastoRouter = require('./gastoRouter');
const ideaRouter = require('./ideaRouter');
const noteRouter = require('./noteRouter');
const todoRouter = require('./todoRouter');
const foodRouter = require('./foodRouter');
const weeklyRouter = require('./weeklyRouter');

const router = Router();

router.use("/gasto", gastoRouter);
router.use("/idea", ideaRouter);

router.use("/food", foodRouter );
router.use("/weekly", weeklyRouter);

router.use("/note", noteRouter);
router.use("/reminder", );
router.use("/reminderrow", );
router.use("/todo", todoRouter);
router.use("/todorow", );
 module.exports = router;

 