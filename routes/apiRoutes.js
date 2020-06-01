var db = require("../models");

module.exports = function (app) {
  // Get all examples test
  app.get("/api/quiz", function (req, res) {
    db.Quizs.findOne({}).then(function (dbQuizs) {
      res.json(dbQuizs);
    });
  });

  // Create a new example
  app.get("/api/users/:id", function (req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an example by id
  app.delete("/api/quiz/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
