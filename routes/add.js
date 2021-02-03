var data = require("../data.json");

exports.addFriend = function(request, response) {  
	let tempName = request.query.name;
  let desc = request.query.description;
  let IMGurl = "http://lorempixel.com/400/400/people";
  let tempInput = {"name": tempName, "description": desc, "imageURL": IMGurl};
  data.friends.push(tempInput);
  response.render('index', data);
}