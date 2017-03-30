require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('m.maoyan.com//movie/list.json?type=hot&offset=0&limit=10')
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(stories) {
		console.log(stories);
	});
