// var path = require("path");
var db = require("../models");

var passport = require("passport");
var trending = require("../public/js/trending");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "I Choose Brew!",
    //     examples: dbExamples
    //   });
    // });
    res.render("index",{trending : trending, username: "test"});
  });

  // Load example page and pass in an example by id
  app.get("/quiz", function(req, res) {
    res.render("quiz");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });
  
  //These two are POST urls, they're going to take in information
  //from the login forms, check with the database, and redirect to
  //either the index page, or a 404 if the user isn't found. 
  app.post("/register", function(req, res){
    db.Users.create(req.body).then(function(dbUsers) {
      console.log("we made it!", dbUsers);
      res.render("index");
    });
  });
  app.post("/login", function(req, res){
    try{
    db.Users.findOne({where: {user_nickname: req.body.user_nickname, user_password: req.body.user_password}}).then(function(dbUsers) {
      console.log("we made it!", dbUsers);
      res.render("index", {user: req.body});
    });
  }
  catch(error){
    console.warn("username or password was wrong", error);
    res.render("login", {error: error});
  }
  });

  app.get("/profile", function(req, res) {
    res.render("profile");
  });

  app.get("/search", function(req, res) {
    res.render("search");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
 
};
