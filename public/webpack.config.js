/**
 * Created by Administrator on 2015/11/26.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项 提取公共部分
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        js: ['./jsx/CommentBox.js', './jsx/ProductBox3.js'],
        css: ['./css/main.css'],
    }
    ,
    //入口文件输出配置
    output: {
        path: __dirname + '/src/',
        publicPath: "/src/",
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'E:/www/ReactDemo/public/src', //绝对路径
        extensions: ['', '.js', '.json', '.css'],
        alias: {
            main: 'src/main.js',
        }
    }

};