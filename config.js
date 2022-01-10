const ENV = process.env.NODE_ENV || "dev";
const config = require("dotenv").config({ path: `./.env.${ENV}` });

module.exports = config;
