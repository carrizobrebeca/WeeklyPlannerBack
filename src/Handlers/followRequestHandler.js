
const { FollowRequest } = require('../db');

const sendFollowRequest = async (req, res) => {
  const requesterId = req.userId;
  const targetId = req.params.id;

  if (requesterId === targetId) return res.status(400).json({ message: 'No puedes seguirte a ti mismo.' });

  const existing = await FollowRequest.findOne({ where: { requesterId, targetId } });

  if (existing) return res.status(400).json({ message: 'Ya enviaste una solicitud.' });

  await FollowRequest.create({ requesterId, targetId });
  res.json({ message: 'Solicitud enviada.' });
};


module.exports= {
   sendFollowRequest
}