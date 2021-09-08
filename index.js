const liveServer = require("live-server");
const fs = require("fs");
const main_file = "asdas.html";
var params = {
    port: 80,
    host: "0.0.0.0",
    root: "./", 
    open: false,
    file: main_file,
    wait: 1000, 
    mount: [['/components', './node_modules','./css','./img','./js',"./"]],
    logLevel: 2,
    middleware: [function(req, res, next) { next(); }] 
};
liveServer.start(params);