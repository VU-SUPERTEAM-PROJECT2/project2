var db = require("../models");
var beerData = require("../public/js/quiz-object.js");


module.exports = function (app) {
  // Get all examples test
  app.get("/api/quiz", function (req, res) {
    db.Quizs.findOne({}).then(function (dbQuizs) {
      res.json(dbQuizs);
    });
  });

  app.put("/api/user", function(req, res) {
    
    var body = res.req.body;
    var userScore = body.scores;
    var beerScores = beerData.scores;
    var scoresArr = [];

    for (var i = 0; i < beerScores.length; i++) {
      var match = beerScores[i];

      if(!userScore === beerScores){
        throw err;
      }else{
        return match;
      }
    }
    
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
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
