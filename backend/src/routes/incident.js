const incidentRouter = require("express").Router();
const incidentController = require("../controller/incident");
const { celebrate, Joi, Segments } = require("celebrate");
incidentRouter.post(
  "/incident",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number()
        .required()
        .min(1)
    })
  }),
  incidentController.create
);

incidentRouter.get(
  "/incident",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  incidentController.index
);

incidentRouter.delete(
  "/incident/:id",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  incidentController.delete
);

module.exports = incidentRouter;
