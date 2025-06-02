const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Define el modelo de Usuario
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Genera un UUIDv4 por defecto
      primaryKey: true, // Establece el ID como clave primaria
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // El campo 'nombrecompeto' es obligatorio
    },
   
    userName: {
      type: DataTypes.STRING,
      allowNull: false, // El campo 'userName' es obligatorio
      unique: true, //  debe ser único en la base de datos
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false, //  es obligatorio
   
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    image: { 
      type: DataTypes.STRING,
      allowNull: true, // El campo 'imagen' es opcional
    },
  
   
  }, {
    timestamps: true,
  });
};

   // googleID: {
    //   type: DataTypes.STRING,
    //   allowNull: true, // El campo 'googleID' es opcional
    // },
     // resetPasswordToken: {
    //   type: DataTypes.STRING,
    //   allowNull: true, // Se llena cuando el usuario solicita el restablecimiento de contraseña
    // },
    // resetPasswordExpires: {
    //   type: DataTypes.DATE,
    //   allowNull: true, // Fecha límite para que el token de restablecimiento sea válido
    // },