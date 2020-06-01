var axios = require("axios");
var Pokemon = require("./nonSQL_models/pokemon");


var ranNum = Math.floor(Math.random() * 152);
// Constructing a queryURL using the random number
var queryURL = "https://pokeapi.co/api/v2/pokemon/" + ranNum;
// console.log(queryURL);
// Performing an AJAX request with the queryURL
var pokemon;

axios

  .get(queryURL)
  // After data comes back from the request
  .then(function(response) {
    //   console.log("Response Object:", response);
    // console.log("Name:", response.data.name);
    var pokemonPic =
      "https://pokeres.bastionbot.org/images/pokemon/" + ranNum + ".png";
    //   console.log("Picture url", pokemonPic);
    var newPokemon = new Pokemon(
    response.data.name, 
    pokemonPic);
    pokemon = newPokemon;
    
  });


module.exports =pokemon;