const express = require("express");
const app = express();
const cors = require("cors");
const ongRouter = require("./routes/ongs");
const incidentRouter = require("./routes/incident");
const profileRouter = require("./routes/session");
app.use(cors());
app.use(express.json());
app.use(ongRouter);
app.use(incidentRouter);
app.use(profileRouter);
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});
app.listen(3000);
