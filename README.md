# An application written in React for job finding
# log:
### 2019.3.26
##### Login module
##### Register module
+ 使用antd-mobile按需导入有一点需要注意，`npm i babel-plugin-import -D`,这个插件可以实现按需导入js和css（css不用像之前手动引入了）
+ .babelrc的配置
```
{
	"plugins": [
		["import", { "libraryName": "antd-mobile", "style": "css" }] // `style: true` 会加载 less 文件
	]
}
```
+ 然后直接引入就可以了:`import { Button } from 'antd-mobile';`
---
### 2019.04.01 前端对首页布局进行调整， 后端express使用image插件进行图片的压缩
```
var images = require("images");
router.post('/shopPut/img', upload, function(req, res) {
	var reqname = req.get('name');
	reqname = reqname.split(',');
	var name = '';
	for(var i in reqname) {
		name += String.fromCharCode(reqname[i]);
	}
	var newName = req.files[0].path + '.' + req.files[0].mimetype.split('image/')[1];



	fs.rename(req.files[0].path, newName, function (err) {
         if(err) {
             return res.json({msg: '上传失败'})
         }
         images(newName)                     //Load image from file 
		                                        //加载图像文件
		    .size(400)                          //Geometric scaling the image to 400 pixels width
		                                        //等比缩放图像到400像素宽
		    .draw(images(newName), 10, 10)   //Drawn logo at coordinates (10,10)
		                                        //在(10,10)处绘制Logo
		    .save(newName, {               //Save the image to a file, with the quality of 50
		        quality : 50                    //保存图片到文件,图片质量为50
		    });
     });
	var connection = conn();
	connection.query(`update goods set imgUrl=CONCAT(imgUrl, ',${req.files[0].filename + '.' + req.files[0].mimetype.split('image/')[1]}') where name='${name}'`, function(err, data) {
			if(err) {
				res.end(err)
				return connection.end();
			} 
			res.json({msg: 'nice'})
			return connection.end();
		});
});
```
### 完成帮辅信息的列表渲染以及发布帮辅信息功能 2019-04-05
---
### 后端使用爬虫爬取了腾讯新闻的教育类新闻，前端完成对首页布局的优化，将新闻渲染到首页的中下部 2019-04-14 
### 增加了我的信息页面，实现个人信息的查看与修改 2019-04-20
# 2019-05-09
### 根据美工设计稿美化了登陆页面和注册页面的排版
---
# 2019-05-18
### 重做校友帮模块，改为校友客，功能大改......