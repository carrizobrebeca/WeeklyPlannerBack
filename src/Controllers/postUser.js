const { User } = require("../db");

const postUser = async (name, userName, city, password, image) => {
  
    const UserExistente = await User.findOne({ where: { userName } });
    if (UserExistente) {
      return res
        .status(400)
        .json({ error: " Nombre de usuario ya registrado" });
    }

    return await User.create({
      name, userName, city, password, image
    });

};

module.exports = postUser;
