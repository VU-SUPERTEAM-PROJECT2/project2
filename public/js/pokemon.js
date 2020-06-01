var randomPokemon = function () {
    // Grabbing and storing the data-animal property value from the button
    var ranNum = Math.floor(Math.random() * 152);
    // Constructing a queryURL using the random number
    var queryURL = "https://pokeapi.co/api/v2/pokemon/" + ranNum;
    console.log(queryURL);
    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET",
    })
      // After data comes back from the request
      .then(function (response) {
        console.log("Response Object:", response);
        console.log("Name:", response.forms[0].name);
        var pokemonPic = "https://pokeres.bastionbot.org/images/pokemon/" + ranNum + ".png";
        console.log("Picture url", pokemonPic);
      });
  };
  randomPokemon();