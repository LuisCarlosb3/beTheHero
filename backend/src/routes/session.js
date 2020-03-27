const sesionRouter = require("express").Router();
const sessionController = require("../controller/session");
const profileController = require("../controller/profille");
const { celebrate, Joi, Segments } = require("celebrate");
sesionRouter.post(
  "/session",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
  sessionController.create
);
sesionRouter.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  profileController.index
);

module.exports = sesionRouter;
