
// import beer constructor
// var Beer = require("./nonSQL_models/beers");
// var env = process.env.NODE_ENV;
var client_id = process.env.CLIENTID;
var client_secret = process.env.CLIENTSECRET;


// Get references to page elements
var $searchWord = $("#search-word");
var $submitBtn = $("#submit");
var $resultList = $("#results-list");


// // what happens when submit is pressed on search page
var handleFormSubmit = function(event) {
  event.preventDefault();

//   // grabs value of the search form so that we can use it in our api request
  var beerSearch = $searchWord.val().trim();

  

  if (!beerSearch) {
    alert("You must enter a name of a beer");
    return;
  }

  // API.saveExample(example).then(function() {
  //   refreshExamples();
//   // });
querySearch(beerSearch);
console.log(beerSearch);

  $searchWord.val("");
};

// //event listener for submit button
$submitBtn.on("click", handleFormSubmit);

function querySearch(search){
  $.ajax({
    url: `https://api.untappd.com/v4/beer/trending?client_id=${client_id}&client_secret=${client_secret}`,
    method: "GET"
  }).then(function(response) {
    console.log(response.data.response.micro.items[0].beer.beer_name);
  });
}

