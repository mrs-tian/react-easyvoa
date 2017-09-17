var express = require('express');
var router = express.Router();
var url = require("url");
var http = require("http");
var cheerio = require("cheerio");
var querystring = require("querystring");
/* GET users listing. */
router.get('/article.json', function(request, response, next) {
  var id = request.query.id;
  var category=id.split('.')[0];
  var endId=id.split('.')[1];
 console.log(id);
var link="http://www.easyvoa.com/"+category+'/'+endId+".html";
console.log(link);
  http.get(link, function(res) {
  				
				if(res.statusCode == "200") {

				let html = '';

				res.on("data", function(data) {
					html += data;
				})

				res.on("end", function(){
					var $ = cheerio.load(html),
						result = [],
						list = $("#content");
					
				for (var i = 0; i < list.length; i++) {
						var item = list.eq(i),
							title = item.find("#content_title h1").text(),
							head_info = item.find("#head_info").text(),
							main = item.find("#content_main").text(),
							ad = item.find("#content_main #adContent").text();
					result.push({
						title: title,
						head_info: head_info,
						main : main,
						ad : ad
					})
				}
				response.json({
					ret: true,
					data: {
						article: result

					}
				});
				})

			}


	})
});

module.exports = router;
