const http = require('http') // достаёт из ноды обработку Http запросов

const port = 8080

const listener = (req, res) => {
    console.log(req.headers)
    console.log(req.headers.host)
    console.log(req.method)
    console.log(req.url)
    if (req.url === "/favicon.ico" && req.method == "GET") {
        res.writeHead(404);
        res.end("Not found")
        console.log("return 404")
        return;
    } 
    if (req.method==="GET") {
        if (req.url === "/test")
        {
            res.writeHead(200)
            res.end('test')
            return;
        }
        if (req.url === "/test2")
        {
            res.writeHead(200)
            res.end('test2 visited')
            return;
        }
    }
}

const server = http.createServer(listener)
server.listen(port)