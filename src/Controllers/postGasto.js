const { Gasto } = require("../db");

const postGasto = async (category, description, date, price, detail) => {

     return await Gasto.create({ category, description, date, price, detail});
};

module.exports = postGasto;
