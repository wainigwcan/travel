const index = require("./data/index.json");
const detail = require("./data/detail.json");
const city = require("./data/city.json");

module.exports = { 
    publicPath: '/', // 根路径
    outputDir: "dist1",// 构建输出目录
    assetsDir: 'assets', // 静态资源目录
    lintOnSave: false, //是否开启eslint 保存检测 格式不对都会警告 有效值： true || false || 'error'
    devServer: {
        open: false, // 自动打开浏览器  true
        host: "0.0.0.0",
        port: 8080 ,//这里可以修改端口号  8081 8082
        https: false, //true 浏览器中会有警告 您的连接不是私密连接
        hotOnly: false,
        proxy: {
            // 配置跨域
            '/api':{
                target: 'http://localhost:5000/api/',
                ws: true, // 是否跨域
                changOrigin: true,
                pathRewrite: {
                    '^api': ''
                }
            }
        },
        before(app){
            // http://localhost:8080/api/index
            app.get("/api/index", (req,res) => {
                res.json(index);
            });
            // http://localhost:8080/api/detail
            app.get("/api/detail", (req,res) => {
                res.json(detail);
            });
            // http://localhost:8080/api/city
            app.get("/api/city", (req,res) => {
                res.json(city);
            });
        }
    }
}