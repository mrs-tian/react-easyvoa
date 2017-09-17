var express = require('express');
var router = express.Router();
const http = require("http");
const cheerio = require("cheerio");
/* GET users listing. */
router.get('/categories.json', function(request, response, next) {
  http.get("http://www.easyvoa.com", function(res) {

			if(res.statusCode == "200") {

				let html = '';

				res.on("data", function(data) {
					html += data;
				})

				res.on("end", function(){
					var $ = cheerio.load(html),
						result = [],
						list = $("#title ul li");

					for (var i = 0; i < list.length; i++) {
						var item = list.eq(i),
							name = item.find("a").text();
							
							result.push({
								name: name
							})
						
						
					}
				response.json({
					ret: true,
					data: {
						category: result
					}
				});
				})

			}

	})
});

module.exports = router;
