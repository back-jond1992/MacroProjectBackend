const { fetchUser, addUser } = require("../models/userModel");

const getUser = (req, res, next) => {
  const user = req.body;
  fetchUser(user)
    .then((result) => {
      res.status(200).send({ user: result });
    })
    .catch(next);
};

const postUser = (req, res, next) => {
  const user = req.body;
  addUser(user)
    .then((result) => {
      res.status(201).send({ user: result });
    })
    .catch(next);
};

module.exports = { getUser, postUser };
