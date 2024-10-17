const { Problem } = require("../models");
const NotFound = require("../errors/notFound.error");
const logger = require("../config/logger.config");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData?.testCases ? problemData?.testCases : [],
      });
      return problem;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) {
        logger.error(`Problem with id: ${id} not found in the database`);
        throw new NotFound("Problem", id);
      }
      return deletedProblem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemRepository;
