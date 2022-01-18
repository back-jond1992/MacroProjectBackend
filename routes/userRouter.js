const userRouter = require("express").Router();
const { getUser, postUser } = require("../controllers/userController");

userRouter.get("/:email", getUser);
userRouter.post("/", postUser);

module.exports = userRouter;
