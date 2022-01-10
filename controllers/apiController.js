const getAPI = (req, res, next) => {
  res.status(200).send({ message: "Welcome" });
};

module.exports = getAPI;
