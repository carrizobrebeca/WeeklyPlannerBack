const {Router} = require('express');

const usersRouter = require('./usersRouter');
const eventRouter = require('./eventRouter');
const postRouter = require('./postRouter');
const login = require('../Controllers/login');




const router = Router();

router.use("/users", usersRouter);
router.use("/event", eventRouter);
router.use("/post", postRouter);
router.post("/login", login);


 module.exports = router;

 