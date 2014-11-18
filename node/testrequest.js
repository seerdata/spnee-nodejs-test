var request = require('request');

var mydata = {
  red: "michele",
  blue: "peter"
}

var options1 = {
  uri: 'http://localhost:4567/api/1.0/test1',
  method: 'POST',
  body: mydata,
  json: true
};

request(options1, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(response.body) // Print the shortened url.
  }
});

var options2 = {
  uri: 'http://localhost:4567/api/1.0/test2',
  method: 'POST',
  body: mydata,
  json: true
};

request(options2, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(response.body) // Print the shortened url.
  }
});
