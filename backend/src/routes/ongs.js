const ongRouter = require("express").Router();
const ongController = require("../controller/ong");

ongRouter.post("/ongs", ongController.create);
ongRouter.get("/ongs", ongController.index);

module.exports = ongRouter;
