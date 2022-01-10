require("./config");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

const apiRouter = require("./routes/apiRouter");

const app = express();
app.use(express.json());

app.use(cors());

const uri = process.env.DATABASE_TEST;

const { PORT = 9090 } = process.env;

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
