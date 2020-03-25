const sesionRouter = require("express").Router();
const sessionController = require("../controller/session");
const profileController = require("../controller/profille");

sesionRouter.post("/session", sessionController.create);
sesionRouter.get("/profile", profileController.index);

module.exports = sesionRouter;
