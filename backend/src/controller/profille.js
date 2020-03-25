const { incidents: Incident } = require("../database/models/index");
const { ong: Ong } = require("../database/models/index");
exports.index = async (req, res, next) => {
  try {
    const { page = 1 } = req.query;
    const ong_id = req.headers.authorization;
    const numCases = await Incident.count({ where: { ong_id } });
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
    return res.status(200).json({ incidents });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
