/**
 * Created by zeus on 16/8/11.
 */
var express = require('express');
var router = express.Router();
//var articles = [];
//articles.push({
//    title: 'Express学习',
//    content: '在Express中,要把本地变量输出到被渲染的视图有几种办法,不过首先要有可渲染的东西。 本节会用一些假数据组装出照片列' +
//    '表的初始视图。\n我们暂时先不引入数据库,而是做一些假数据。先创建文件./routes/photos.js,其中包含与照 片相关的路由。' +
//    '然后在这个文件中创建一个photos数组,让它充当我们的临时数据库。代码如下 所示:'
//});
//articles.push({
//    title: 'Express学习',
//    content: '在Express中,要把本地变量输出到被渲染的视图有几种办法,不过首先要有可渲染的东西。 本节会用一些假数据组装出照片列' +
//    '表的初始视图。\n我们暂时先不引入数据库,而是做一些假数据。先创建文件./routes/photos.js,其中包含与照 片相关的路由。' +
//    '然后在这个文件中创建一个photos数组,让它充当我们的临时数据库。代码如下 所示:'
//});
var articlesOption = require('../dao/articlesDao');

router.get('/articles', function (req, res, next) {
    //res.render('articles', {
    //    title: '文章',
    //    articles: articles
    //});
    switch (req.method) {
        case 'GET':
            articlesOption.queryAll(req, res, next);
            break;
        //case 'POST':
        //    articlesOption.insert(req,res,next);
        //    break;
    }
});
router.post('/articles', function (req, res, next) {
    articlesOption.insert(req, res, next);
});

router.delete('/articles/:id', function (req, res, next) {
    articlesOption.deleteById.apply({}, arguments);
});

module.exports = router;