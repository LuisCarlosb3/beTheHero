const { incidents: Incident } = require("../database/models/index");
const { ong: Ong } = require("../database/models/index");
exports.index = async (req, res, next) => {
  try {
    const { page = 1 } = req.query;
    const numCases = await Incident.count();
    const incidents = await Incident.findAll({
      limit: 5,
      offset: (page - 1) * 5,
      include: {
        model: Ong,
        attributes: ["name", "email", "whatsapp", "city", "uf"],
        required: true
      }
    });
    res.header("X-Total-Count", numCases);
    res.status(200).json({ incidents });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;
    const incident = await Incident.create({
      title,
      description,
      value,
      ong_id
    });
    return res.status(201).json({ incident });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    const incident = await Incident.findOne({
      where: { id },
      attributes: ["ong_id"],
      raw: true
    });
    if (incident.ong_id != ong_id) {
      const error = new Error("User not authorized");
      error.status = 403;
      throw error;
    } else {
      await Incident.destroy({ where: { id } });
      return res.status(204).send();
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
