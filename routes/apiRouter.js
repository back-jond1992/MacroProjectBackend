const apiRouter = require("express").Router();
const getAPI = require("../controllers/apiController");

apiRouter.get("/", getAPI);

module.exports = apiRouter;
