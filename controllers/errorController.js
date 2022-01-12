handlesMongoDBErrors = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    res.status(400).send("Missing fields");
  } else {
    next(err);
  }
};

handlesCustomErrors = (err, req, res, next) => {
  if (err.status && err.message) {
    res.status(err.status).send(err.message);
  } else {
    next(err);
  }
};

handles500Errors = (err, req, res, next) => {
  res.status(500).send("Internal Server Error");
};

module.exports = { handlesMongoDBErrors, handlesCustomErrors, handles500Errors };
