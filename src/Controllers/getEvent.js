const { Event } = require('../db');


const getEvent = async (name) => {
 

  let whereClause = {};  // Declaramos una cláusula where vacía

  // Si se pasa el nombre, agregamos el filtro a la cláusula where
  if (name) {
    whereClause = {
      name: name  // Filtramos por el nombre que viene como argumento
    };
  }

  // Hacemos la consulta con el filtro correspondiente
  const eventsDb = await Event.findAll({
    where: whereClause
  });
    return eventsDb
 
};

module.exports = {getEvent};


