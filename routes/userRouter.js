const userRouter = require("express").Router();
const { getUser, postUser, patchUser } = require("../controllers/userController");

userRouter.get("/:email", getUser);
userRouter.post("/", postUser);
userRouter.patch("/:id", patchUser);

module.exports = userRouter;
