//this code needs to be repurposed for use on a website it is currently not useable in the project but is the basics of querying from openbeerDB
var axios = require("axios");
var searchItem = "bud+light";
// We then run the request with axios module on a URL with a JSON
axios
  .get(
    `https://data.opendatasoft.com/api/records/1.0/search/?dataset=open-beer-database%40public-us&q=${searchItem}&facet=style_name&facet=cat_name&facet=name_breweries&facet=country`
  )
  .then(function(response) {
    for(i=0;i<response.data.nhits;i++){
    console.log("the result is " +response.data.records[i].fields.name+": " +response.data.records[i].fields.descript);
  }
  }
);
