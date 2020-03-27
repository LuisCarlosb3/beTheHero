const ongRouter = require("express").Router();
const ongController = require("../controller/ong");
const { celebrate, Joi, Segments } = require("celebrate");
ongRouter.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  ongController.create
);
ongRouter.get("/ongs", ongController.index);

module.exports = ongRouter;
