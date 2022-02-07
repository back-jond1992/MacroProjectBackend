const { fetchUser, addUser, updateUser } = require("../models/userModel");

const getUser = (req, res, next) => {
  const email = req.params;
  fetchUser(email)
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

const patchUser = (req, res, next) => {
  const id = req.params;
  updateUser(req.params, req.body)
    .then((result) => {
      res.status(200).send({ user: result });
    })
    .catch(next);
};

module.exports = { getUser, postUser, patchUser };
