var axios = require("axios");

// We then run the request with axios module on a URL with a JSON

var axios = require("axios");
// var env = process.env.NODE_ENV;
var client_id = "84F4224C1925D7EA68A3F19E962B060CB2C5F3F2";
var client_secret = "9125283B9252CB44CF87D885C80195D506971E3D";
// We then run the request with axios module on a URL with a JSON

var name1;
var name2;
var name3;

axios

  .get(
    `https://api.untappd.com/v4/beer/trending?client_id=${client_id}&client_secret=${client_secret}`
  )
  .then(function(response) {
    console.log(response.data.response.micro.items[0].beer.beer_name);
    name1 = response.data.response.micro.items[0].beer.beer_name;
    name2 = response.data.response.micro.items[1].beer.beer_name;
    name3 = response.data.response.micro.items[2].beer.beer_name;
  });



module.exports = function(sequelize, DataTypes) {
  var trending = "1. "+ name1 +"  2. " + name2 + "  3. " +name3;

  
  return trending;
};

