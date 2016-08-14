/**
 * Created by zeus on 16/8/14.
 */
var articles = {
    insert: 'INSERT INTO ' +
    'articles(id,title,content,createTime,modifyTime) ' +
    'VALUES(0,?,?,?,?)',
    queryAll: 'SELECT id,title,content,createTime,modifyTime ' +
    'FROM articles',
    queryById: 'SELECT id,title,content,createTime,modifyTime ' +
    'FROM articles WHERE id = ?',
    delete: 'DELETE FROM articles WHERE id = ?'
};

module.exports = articles;