var axios = require("axios");
var Beer = require("./nonSQL_models/beers");
// We then run the request with axios module on a URL with a JSON

// var env = process.env.NODE_ENV;
var client_id = process.env.CLIENTID;
var client_secret = process.env.CLIENTSECRET;
// We then run the request with axios module on a URL with a JSON
var beers = [];

axios

  .get(
    `https://api.untappd.com/v4/beer/trending?client_id=${client_id}&client_secret=${client_secret}`
  )
  .then(function(response) {
    console.log(response.data.response.micro.items[0].beer.beer_name);
    for (i = 0; i < 3; i++) {
      var newBeer = new Beer(
        response.data.response.micro.items[i].beer.beer_name,
        response.data.response.micro.items[i].beer.beer_style,
        response.data.response.micro.items[i].brewery.brewery_name,
        response.data.response.micro.items[i].beer.beer_label,
        response.data.response.micro.items[i].brewery.contact.url
      );
      beers.push(newBeer);
    }
    

   
  });

module.exports = function() {
  return beers;
};
