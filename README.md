#Eye of Providence
**by Quin Kennedy**, created initially during [_Art Hack Day - God Mode_](http://arthackday.net/god_mode/) at 319 Scholes

##Setup:
1. Startup a local Spacebrew server
2. Startup a local Persistent Admin using the persistent_config.json in this repository
3. Open a web admin to monitor connections
4. Start up the Spacebrew curl process in the directory Azimuthal Equidistant Projection_files/node `node curl.js`
5. Navigate to the Azimuthal Equidistant Projection_files directory and start up `python -m SimpleHTTPServer`
6. Go to http://localhost:8000/ in Google Chrome and it should animate!
7. You can use arrows to re-position the map, and alt up/down to scale the map.
    * There are also a series of query string parameters that you can use to set positions and scale:
    `http://localhost:8000/index.html?scale=.735&left=235&top=-34&imgtop=120&imgscale=.65`
8. Go fullscreen `Cmd+Shift+f`


###Acknowledgements
Thank you [Chris Allick](https://github.com/chrisallick) for the Azimuthal Projection code.
Thank you [tweetcinema](http://www.tweetcinema.com/watchme/) for the footage