const {Router} = require('express');

const usersRouter = require('./usersRouter');
const eventRouter = require('./eventRouter');
const postRouter = require('./postRouter');
const login = require('../Controllers/login');
const { rejectFollowRequest } = require('../Handlers/rejectFollowHandler');
const { acceptFollowRequest } = require('../Handlers/acceptFollowHandler');
const { sendFollowRequest } = require('../Handlers/followRequestHandler');
const requireAuth = require('../middlewares/middlewere');
const getFollowRequests = require('../Controllers/getFollowRequests');

const router = Router();


router.post('/request/:id', requireAuth, sendFollowRequest);
router.put('/accept/:requestId', requireAuth, acceptFollowRequest);
router.put('/reject/:requestId', requireAuth, rejectFollowRequest);
router.get('/requests', requireAuth, getFollowRequests);

router.use("/users", usersRouter);
router.use("/event", eventRouter);
router.use("/post", postRouter);
router.post("/login", login);

 module.exports = router;

 