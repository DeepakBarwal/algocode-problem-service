const express = require("express");

const { ProblemsController } = require("../../controllers");

const problemRouter = express.Router();

problemRouter.get("/ping", ProblemsController.pingProblemController);

problemRouter.get("/:id", ProblemsController.getProblem);

problemRouter.get("/", ProblemsController.getProblems);

problemRouter.post("/", ProblemsController.addProblem);

problemRouter.delete("/:id", ProblemsController.deleteProblem);

problemRouter.put("/:id", ProblemsController.updateProblem);

module.exports = problemRouter;
