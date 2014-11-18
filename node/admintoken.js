var request = require('request');

var options = {
  uri: 'http://localhost:4567/api/1.0/admin/token',
  method: 'POST',
  data: {
    "AccessToken": "104a5866-b844-4186-9322-19cacdcec298",
    "Token": "704a5866-b844-4186-9322-99cacdcec299",
    "Account": "7",
    "Project": "9"
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.id) // Print the shortened url.
  }
});




/*
item1 := TokenForm1{ AccessToken: "104a5866-b844-4186-9322-19cacdcec298",
                     Token: "704a5866-b844-4186-9322-99cacdcec299",
                     Account: "7",
                     Project: "9"}

item2 := TokenForm2{ AccessToken: "104a5866-b844-4186-9322-19cacdcec298",
                     Account: "6",
                     Project: "8"}
*/
