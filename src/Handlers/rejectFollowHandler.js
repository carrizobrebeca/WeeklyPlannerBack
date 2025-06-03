const { FollowRequest } = require('../db');
const rejectFollowRequest = async (req, res) => {
  const requestId = req.params.requestId;

  const request = await FollowRequest.findByPk(requestId);

  if (!request || request.targetId !== req.userId) {
    return res.status(403).json({ message: 'No autorizado' });
  }

  request.status = 'rejected';
  await request.save();

  res.json({ message: 'Solicitud rechazada.' });
};

module.exports= {
   rejectFollowRequest
}