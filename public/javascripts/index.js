fetch("../json/index.json").then(function(res) {
	if (res.ok) {
		res.json().then(function(data) {
		  console.log(data);
		});
	} else {
		console.log("Looks like the response wasn't perfect, got status", res.status);
	}
}, function(e) {
	console.log("Fetch failed!", e);
});