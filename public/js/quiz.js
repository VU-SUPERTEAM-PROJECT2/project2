console.log("hello")
$(function() {
  // $("#ex11").slider({ step: 1, min: 0, max: 1 });

  // Submit button click event
  $("#submit").on("click", function(event) {
    console.log(event);
    event.preventDefault();

    // Holds user input
    var userData = {
      scores: [
        $("#quest1").val(),
        $("#quest2").val(),
        $("#quest3").val(),
        $("#quest4").val(),
        $("#quest5").val(),
      ],
    };
    console.log(userData);

    // Post user input to the user api
    $.post("/api/user", userData, function(data) {
      $("#match-name").text(data.name);
    });
  });
});
