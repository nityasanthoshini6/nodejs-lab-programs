import http from 'http';
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>My Server</h1>");
    res.write("<p>Hello world!</p>");
    res.end();
});
server.listen(3000,() => {
    console.log("Server is running at http://localhost:3000");
});