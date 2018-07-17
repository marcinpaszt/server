
var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;


function handleRequestOne(request, response) {
  response.end("You're a JavaScript mastermind!");
}

function handleRequestTwo(request, response) {
  response.end("JavaScript must not be your forte.");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function() {
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {
  console.log("Server listening on: http://localhost:" + PORTTWO);
});
