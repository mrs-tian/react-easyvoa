const express = require('express');
const router = express.Router();
const http = require("http");
const cheerio = require("cheerio");
/* GET home page. */

router.get('/category.json', function(req, res, next) {
  res.json({
	"ret":true,
	"data":{
		"categories":[{
			"name":"空中英语教室",
			"type":"mail",
			"id":0
		},{
			"name":"空中英语教室",
			"type":"mail",
			"id":1
		},{
			"name":"空中英语教室",
			"type":"mail",
			"id":2
		},{
			"name":"空中英语教室",
			"type":"mail",
			"id":3
		},{
			"name":"空中英语教室",
			"type":"mail",
			"id":4
		},{
			"name":"空中英语教室",
			"type":"mail",
			"id":5
		},{
			"name":"空中英语教室",
			"type":"mail",
			"id":6
		},{
			"name":"空中英语教室",
			"type":"mail",
			"id":7
		},{
			"name":"空中英语教室",
			"type":"mail",
			"id":8
		},{
			"name":"空中英语教室",
			"type":"mail",
			"id":9
		}],

		"normalMenu":[{
			"id":1,
			"title":"音频"
		},{
			"id":2,
			"title":"视频"
		},{
			"id":3,
			"title":"翻译"
		}],

		"middleMenu":[{
			"id":1,
			"title":"科技报道"
		},{
			"id":2,
			"title":"建国实话"
		},{
			"id":3,
			"title":"科技报道"
		},{
			"id":4,
			"title":"科技报道"
		},{
			"id":5,
			"title":"科技报道"
		},{
			"id":6,
			"title":"科技报道"
		},{
			"id":7,
			"title":"科技报道"
		},{
			"id":8,
			"title":"科技报道"
		},{
			"id":9,
			"title":"科技报道"
		},{
			"id":10,
			"title":"科技报道"
		},{
			"id":11,
			"title":"科技报道"
		},{
			"id":12,
			"title":"科技报道"
		},{
			"id":13,
			"title":"科技报道"
		},{
			"id":14,
			"title":"科技报道"
		}],

		"primeMenu":[{
			"id":1,
			"title":"流行美语"
		},{
			"id":2,
			"title":"体育美语"
		},{
			"id":3,
			"title":"中级美语"
		},{
			"id":4,
			"title":"流行美语"
		},{
			"id":5,
			"title":"体育美语"
		},{
			"id":6,
			"title":"中级美语"
		},{
			"id":7,
			"title":"流行美语"
		},{
			"id":8,
			"title":"体育美语"
		},{
			"id":9,
			"title":"中级美语"
		},{
			"id":10,
			"title":"流行美语"
		},{
			"id":11,
			"title":"体育美语"
		},{
			"id":12,
			"title":"中级美语"
		},{
			"id":13,
			"title":"流行美语"
		},{
			"id":14,
			"title":"体育美语"
		},{
			"id":15,
			"title":"中级美语"
		}]
	}
});
});

router.get('/link.json', function(req, res, next) {
  res.json({
	"ret":true,
	"data":{
		"links":[{
			"id":1,
			"name":"小马过河",
			"href":"www.baidu.com"
		},{
			"id":2,
			"name":"雅思培训",
			"href":"www.baidu.com"
		},{
			"id":3,
			"name":"留学机构",
			"href":"www.baidu.com"
		},{
			"id":4,
			"name":"大学生",
			"href":"www.baidu.com"
		},{
			"id":5,
			"name":"人人听力网",
			"href":"www.baidu.com"
		},{
			"id":6,
			"name":"英语小说网",
			"href":"www.baidu.com"
		},{
			"id":7,
			"name":"小马过河",
			"href":"www.baidu.com"
		},{
			"id":8,
			"name":"雅思培训",
			"href":"www.baidu.com"
		},{
			"id":9,
			"name":"留学机构",
			"href":"www.baidu.com"
		},{
			"id":10,
			"name":"大学生",
			"href":"www.baidu.com"
		},{
			"id":55,
			"name":"人人听力网",
			"href":"www.baidu.com"
		},{
			"id":11,
			"name":"英语小说网",
			"href":"www.baidu.com"
		},{
			"id":12,
			"name":"小马过河",
			"href":"www.baidu.com"
		},{
			"id":13,
			"name":"雅思培训",
			"href":"www.baidu.com"
		},{
			"id":14,
			"name":"留学机构",
			"href":"www.baidu.com"
		},{
			"id":15,
			"name":"大学生",
			"href":"www.baidu.com"
		},{
			"id":16,
			"name":"人人听力网",
			"href":"www.baidu.com"
		},{
			"id":17,
			"name":"英语小说网",
			"href":"www.baidu.com"
		},{
			"id":18,
			"name":"小马过河",
			"href":"www.baidu.com"
		},{
			"id":19,
			"name":"雅思培训",
			"href":"www.baidu.com"
		},{
			"id":20,
			"name":"留学机构",
			"href":"www.baidu.com"
		},{
			"id":21,
			"name":"大学生",
			"href":"www.baidu.com"
		},{
			"id":22,
			"name":"人人听力网",
			"href":"www.baidu.com"
		},{
			"id":23,
			"name":"英语小说网",
			"href":"www.baidu.com"
		},{
			"id":24,
			"name":"留学机构",
			"href":"www.baidu.com"
		},{
			"id":25,
			"name":"大学生",
			"href":"www.baidu.com"
		},{
			"id":26,
			"name":"人人听力网",
			"href":"www.baidu.com"
		},{
			"id":27,
			"name":"英语小说网",
			"href":"www.baidu.com"
		}]
	}
});
});




router.get('/index.json', function(request, response, next) {


	http.get("http://www.easyvoa.com", function(res) {

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
							date = item.find("span").text(),
							hasImg = item.parent().find("img").length?true:false,
							href = item.parent().find("a").attr("href"),
							id = null,
							matches = item.attr("href").match(/([0-9]+)/),
							categoryName = item.parent().find("font").text(),
							color = item.parent().find("font").attr("color");
							
							date = date.replace(/(\()|(\))/g, '');
							categoryName = categoryName.replace(/(\[)|(\])/g, '');
							if(matches && matches.length) {
								id = matches[0];
							}
							href = href.replace(/(\/)|(\/)/g, '');
							
							href = href.replace(/index.html/, '');
						
							 href = (href +'.'+ id);
						if(title) {
							result.push({
								title: title,
								date: date,
								new: hasImg,
								categoryName: categoryName,
								color: color,
								href : href,
								id : id
							})
						}

						
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