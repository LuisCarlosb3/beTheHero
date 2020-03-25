const { ong: Ong } = require("../database/models/index");
const crypto = require("crypto");
exports.index = async (req, res, next) => {
  try {
    const ongs = await Ong.findAll();
    return res.status(200).json({ ongs });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.create = async (req, res, next) => {
  try {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");
    const ong = await Ong.create({ id, name, email, whatsapp, city, uf });
    return res.status(201).json({ ong });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
