require("./config");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

const apiRouter = require("./routes/apiRouter");
const { handlesMongoDBErrors, handlesCustomErrors, handles500Errors } = require("./controllers/errorController");

const app = express();
app.use(express.json());

app.use(cors());

const uri = process.env.DATABASE;

const PORT = process.env.PORT || 9090;

mongoose
  .connect(uri)
  .then((response) => {
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Listening on ${PORT}...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", apiRouter);

app.all("*", (req, res, next) => {
  res.status(404).send({ message: "Path not found" });
});

app.use(handlesMongoDBErrors);

app.use(handlesCustomErrors);

app.use(handles500Errors);

module.exports = app;
