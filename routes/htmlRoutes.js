// var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "I Choose Brew!",
    //     examples: dbExamples
    //   });
    // });
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/quiz", function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/quiz.handlebars"));
    res.render("quiz");
  });
  //render registration page
  app.get("/register", function(req, res) {
    res.render("registration");
  });

  app.get("/search", function(req, res) {
    res.render("search");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
