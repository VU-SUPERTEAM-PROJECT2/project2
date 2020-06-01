var beerAnswers = require("./nonSQL_models/quiz-object.js");
console.log("All the beers" + beerAnswers);

$(function() {
  // $("#ex11").slider({ step: 1, min: 0, max: 1 });

  // Submit button click event
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Holds user input
    var userData = {
      scores: [
        $("#quest1").val(),
        $("#quest2").val(),
        $("#quest3").val(),
        $("#quest4").val(),
        $("#quest5").val(),
      ],
    };
    console.log(userData);

    // Put user input to the user api
    $.put("/api/user", userData, function(data) {
      console.log(data);
      var body = res.req.body;
      var userScore = body.scores;
      var beerScores = beerAnswers.scores;
      var scoresArr = [];

      for (var i = 0; i < beerScores.length; i++) {
        var match = beerScores[i];

        if (!userScore === beerScores) {
          throw err;
        } else {
          return match;
        }
      }
    });
  });
});
