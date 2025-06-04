const { FollowRequest, User } = require('../db');

const getFollowRequests = async (req, res) => {
  const requests = await FollowRequest.findAll({
    where: { targetId: req.userId, status: 'pending' },
    include: [{ model: User, as: 'requester', attributes: ['id', 'username', 'avatar'] }]
  });

  res.json(requests);
};

module.exports = getFollowRequests;