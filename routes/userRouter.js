const userRouter = require("express").Router();
const { getUser, postUser } = require("../controllers/userController");

userRouter.get("/", getUser).post("/", postUser);

module.exports = userRouter;
