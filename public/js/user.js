 //Try to get the user.
 var loggedInUserJson = sessionStorage.getItem("user");
 var loggedInUser;
 if (loggedInUserJson) {
   var loggedInUser = JSON.parse(loggedInUserJson);
   $("#username").text(loggedInUser.user_nickname);
 }

 //When a user logs in, set this id. 
 //This will cause a user object (json) to be stored in sessionStorage
 //An incognito window, or logout process can remove that user.
 var userid = $("#userid").text();
 console.log("userid: ", userid);
 if (userid) {
   var route = `api/users/${userid}`;
   console.log(`getting user at ${route}`)
   $.getJSON(route, function (user) {
     console.log("user: ", user);
     sessionStorage.setItem("user", JSON.stringify(user));
     $("#username").text(user.user_nickname);
   });
 }