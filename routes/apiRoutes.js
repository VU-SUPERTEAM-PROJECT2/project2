var db = require("../models");

module.exports = function(app) {
  // Get all examples test
  app.get("/api/quiz", function(req, res) {
    db.Quizs.findOne({}).then(function(dbQuizs) {
      res.json(dbQuizs);
    });
  });
<<<<<<< HEAD
  // // Create a new example
  // app.post("/api/quiz", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
=======

  // Create a new example
  app.post("/api/quiz", function(req, res) {
    db.Quizs.create(req.body).then(function(dbQuizs) {
      res.json(dbQuizs);
    });
  });
>>>>>>> 2a5198cadbc3d9d7c8888db0b5bd5c558b1c2a99

  // // Delete an example by id
  // app.delete("/api/quiz/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
