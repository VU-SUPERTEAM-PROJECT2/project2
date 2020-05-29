var db = require("../models");

module.exports = function(app) {
  // Get all examples test
  app.get("/api/quiz", function(req, res) {
    db.Quizs.findOne({}).then(function(dbQuizs) {
      res.json(dbQuizs);
    });
  });

  // Create a new example
  app.post("/api/quiz", function(req, res) {
    db.Quizs.create(req.body).then(function(dbQuizs) {
      res.json(dbQuizs);
    });
  });

  // // Delete an example by id
  // app.delete("/api/quiz/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
