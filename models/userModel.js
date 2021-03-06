const User = require("../schemas/userSchema");

const fetchUser = (email) => {
  if (!/@/.test(Object.values(email))) {
    return Promise.reject({
      status: 400,
      message: "Invalid request",
    });
  } else {
    return User.findOne(email).then((response) => {
      if (!response) {
        return Promise.reject({
          status: 404,
          message: "User not found",
        });
      }
      return response;
    });
  }
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
    !/weeklyMacros/.test(Object.keys(user)) ||
    !/dailyFoodItems/.test(Object.keys(user))
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

const updateUser = (user, update) => {
  const testUpdate = Object.keys(update);
  console.log(testUpdate);
  console.log(
    testUpdate.includes("dailyMacros"),
    testUpdate.includes("weeklyMacros"),
    testUpdate.includes("dailyFoodItems")
  );
  if (
    testUpdate.includes("dailyMacros") &&
    testUpdate.includes("weeklyMacros") &&
    testUpdate.includes("dailyFoodItems")
  ) {
    const Id = Object.values(user);
    const options = { new: true };
    return User.findByIdAndUpdate(Id, update, options).then((response) => {
      console.log(response);
      if (!response) {
        return Promise.reject({
          status: 404,
          message: "User not found",
        });
      }
      return response;
    });
  } else {
    return Promise.reject({
      status: 400,
      message: "Invalid request",
    });
  }
};

module.exports = { fetchUser, addUser, updateUser };
