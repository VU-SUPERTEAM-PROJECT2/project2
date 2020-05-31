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
$resultList.append(beerSearch);
console.log(beerSearch);

  $searchWord.val("");
};

// //event listener for submit button
$submitBtn.on("click", handleFormSubmit);