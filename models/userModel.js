const User = require("../schemas/userSchema");

const fetchUser = (user) => {
  return User.findOne(user).then((response) => {
    return response;
  });
};

const addUser = (user) => {
  const newUser = new User(user);
  return newUser.save().then((response) => {
    return response;
  });
};

module.exports = { fetchUser, addUser };
