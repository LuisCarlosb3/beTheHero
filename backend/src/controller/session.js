const { ong: Ong } = require("../database/models/index");

exports.create = async (req, res, next) => {
  try {
    const { id } = req.body;
    const ong = await Ong.findOne({ where: { id } });
    if (!ong) {
      const error = new Error("No ONG found with this ID");
      error.status = 400;
      throw error;
    } else {
      res.status(200).json({ ong });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
