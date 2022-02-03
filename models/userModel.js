const User = require("../schemas/userSchema");

const fetchUser = (email) => {
  if (!/email/.test(Object.keys(email)) || Object.keys(email).length > 1) {
    return Promise.reject({
      status: 400,
      message: "Invalid request",
    });
  }
  return User.findOne(email).then((response) => {
    if (!response) {
      return Promise.reject({
        status: 404,
        message: "User not found",
      });
    }
    return response;
  });
};

const addUser = (user) => {
  if (
    !/name/.test(Object.keys(user)) ||
    !/email/.test(Object.keys(user)) ||
    !/avatar_url/.test(Object.keys(user)) ||
    !/height/.test(Object.keys(user)) ||
    !/weight/.test(Object.keys(user)) ||
    !/age/.test(Object.keys(user)) ||
    !/sex/.test(Object.keys(user)) ||
    !/BMR/.test(Object.keys(user)) ||
    !/TDEE/.test(Object.keys(user)) ||
    !/maintenance/.test(Object.keys(user)) ||
    !/target/.test(Object.keys(user)) ||
    !/dailyMacros/.test(Object.keys(user)) ||
    !/weeklyMacros/.test(Object.keys(user))
  ) {
    return Promise.reject({
      status: 400,
      message: "Invalid request",
    });
  } else {
    const newUser = new User(user);
    return newUser.save().then((response) => {
      return response;
    });
  }
};

module.exports = { fetchUser, addUser };
