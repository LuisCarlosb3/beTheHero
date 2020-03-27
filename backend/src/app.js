const express = require("express");
const app = express();
const cors = require("cors");
const ongRouter = require("./routes/ongs");
const incidentRouter = require("./routes/incident");
const profileRouter = require("./routes/session");
const { errors } = require("celebrate");
app.use(cors());
app.use(express.json());
app.use(ongRouter);
app.use(incidentRouter);
app.use(profileRouter);
app.use("/", (req, res, next) => {
  res.status(404).json({ message: "No endpoint for this route" });
});
app.use(errors());
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

module.exports = app;
