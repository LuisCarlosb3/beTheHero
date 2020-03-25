const incidentRouter = require("express").Router();
const incidentController = require("../controller/incident");
incidentRouter.post("/incident", incidentController.create);
incidentRouter.get("/incident", incidentController.index);
incidentRouter.delete("/incident/:id", incidentController.delete);

module.exports = incidentRouter;
