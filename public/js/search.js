//this code needs to be repurposed for use on a website it is currently not useable in the project but is the basics of querying from openbeerDB
var axios = require("axios");
// var env = process.env.NODE_ENV;
var client_id = "84F4224C1925D7EA68A3F19E962B060CB2C5F3F2";
var client_secret = "9125283B9252CB44CF87D885C80195D506971E3D";
// We then run the request with axios module on a URL with a JSON
axios

  .get(
    `https://api.untappd.com/v4/beer/trending?client_id=${client_id}&client_secret=${client_secret}`
  )
  .then(function(response) {
    console.log(response.data.response.micro.items[0].beer.beer_name);
  });
