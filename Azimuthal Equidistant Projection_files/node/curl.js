var sys = require("sys");
var exec = require("child_process").exec;
var spacebrew = require("spacebrew");

var sbClient = new spacebrew.Spacebrew.Client("localhost", "curl client");
sbClient.addPublish("response", "json", {});
sbClient.addSubscribe("request", "number");
sbClient.connect();

sbClient.onCustomMessage = function(name, value, type){
	exec("curl http://www.tweetcinema.com/watchme/pushframe.php?id="+value, respond);
};

function respond(error, stdout, stderr) { sbClient.send("response", "json", JSON.parse(stdout)); };