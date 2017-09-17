const express = require('express');
const router = express.Router();
const http = require("http");
const cheerio = require("cheerio");
/* GET home page. */
router.get('/list.json', function(request, response, next) {

	http.get("http://www.easyvoa.com/voa-speacial-english/Technology-Report/index.html", function(res) {
			//AS_IT_IT-18792
			if(res.statusCode == "200") {

				let html = '';

				res.on("data", function(data) {
					html += data;
				})

				res.on("end", function(){
					var $ = cheerio.load(html),
						result = [],
						list = $("#new_news .title_a");

					for (var i = 0; i < list.length; i++) {
						var item = list.eq(i),
							title = item.attr("title"),
							date = item.parent().find("span").text(),
							hasImg = item.parent().find("img").length?true:false,
							id = null,
							matches = item.attr("href").match(/([0-9]+)/),
							date = date.replace(/(\()|(\))/g, '');
							if(matches && matches.length) {
								id = matches[0];
							}
							result.push({
								title: title,
								date: date,
								new: hasImg,
								id: id	
							})
						
						
					}
				response.json({
					ret: true,
					data: {
						articles: result
					}
				});
				})

			}

	})

});
module.exports =router;