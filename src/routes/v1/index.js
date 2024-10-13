const express = require("express");

const problemsRouter = require("./problems.routes");

const v1Router = express.Router();

v1Router.use("/problems", problemsRouter);

module.exports = v1Router;
