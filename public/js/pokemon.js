var axios = require("axios");
var Pokemon = require("./nonSQL_models/pokemon");


// Constructing a queryURL using the random number
// console.log(queryURL);
// Performing an AJAX request with the queryURL

var getPokemon = async () => {
  var ranNum = Math.floor(Math.random() * 152);
  var queryURL = "https://pokeapi.co/api/v2/pokemon/" + ranNum;
  let response = await axios.get(queryURL);
  var pokemonPic =
    "https://pokeres.bastionbot.org/images/pokemon/" + ranNum + ".png";
  var newPokemon = new Pokemon(
    response.data.name,
    pokemonPic);
  return newPokemon;
};
module.exports = getPokemon;

