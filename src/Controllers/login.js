const express = require('express');

const { User } = require('../db'); // Ajusta según la configuración de tu modelo

const login = async (req, res) => {
  const { userName, password } = req.body;

  if ((!userName && !password)) {
    return res.status(400).json({
      error: 'Faltan datos',
      message: 'Usuario o contraseña incorrectos.',
    });
  }

  try {
    if (userName && password) {
      // Buscar al usuario por userName
      const user = await User.findOne({ where: { userName } });

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Verificar la contraseña
      const isMatch = user.password ===password;

      if (!isMatch) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }
      return res.json({ user });
    }



  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};



module.exports = login;

