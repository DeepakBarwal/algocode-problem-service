const express = require("express");

const { problemsController } = require("../../controllers");

const problemsRouter = express.Router();

problemsRouter.get("/ping", problemsController.pingProblemController);

problemsRouter.get("/:id", problemsController.getProblem);

problemsRouter.get("/", problemsController.getProblems);

problemsRouter.post("/", problemsController.addProblem);

problemsRouter.delete("/:id", problemsController.deleteProblem);

problemsRouter.put("/:id", problemsController.updateProblem);

module.exports = problemsRouter;
