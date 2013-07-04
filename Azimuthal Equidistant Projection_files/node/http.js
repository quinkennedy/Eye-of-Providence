var http = require("http");
http.get({host:"www.tweetcinema.com",port:"80",path:"/watchme/pushframe.php?id=0"},
	function(res){
		console.log(res);
	});