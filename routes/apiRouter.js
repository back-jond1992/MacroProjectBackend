const apiRouter = require("express").Router();
const getAPI = require("../controllers/apiController");
const userRouter = require("./userRouter");

apiRouter.get("/", getAPI);

apiRouter.use("/user", userRouter);

module.exports = apiRouter;
