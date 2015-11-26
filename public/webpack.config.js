/**
 * Created by Administrator on 2015/11/26.
 */
module.exports = {
    entry: [
        './js/CommentBox.js',
        './js/ProductBox3.js'
    ],
    output: {
        path: __dirname + '/js/',
        publicPath: "/js/",
        filename: 'main.js'
    }

};