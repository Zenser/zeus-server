/**
 * Created by zeus on 16/8/14.
 */
var mysql = require('mysql');
var db = require('../config/db').mysql;
var connection = mysql.createConnection(db);
var sqlMapping = require('../dao/articlesSqlMapping');

function insert(req, res, next) {
    connection.connect();
    var body = req.body;
    var time = new Date().getTime();
    connection.query(sqlMapping.insert, [body.title, body.content, time, time],
        function (err, result) {
            if (err) throw err;
            if (result) {
                result = {
                    code: 200,
                    msg: '增加成功'
                };
            }
            res.json(result);
        });
    connection.end();
}

function queryAll(req, res, next) {
    connection.connect();
    connection.query(sqlMapping.queryAll, null, function (err, result) {
        if (err) throw err;
        console.log('this solution is: ', result);
        res.json(result);
    });
    connection.end();
}

function deleteById(req, res, next) {
    connection.connect();
    connection.query(sqlMapping.delete, +req.params.id, function (err, result) {
        if (err) res.json(err);
        if (result.affectedRows > 0) {
            result = {
                code: 204,
                msg: '删除成功'
            }
        } else {
            result = {
                msg: '无资源'
            }
        }
        res.json(result);
    });
    connection.end();
}

var articlesDao = {
    insert: insert,
    queryAll: queryAll,
    deleteById: deleteById
};

module.exports = articlesDao;