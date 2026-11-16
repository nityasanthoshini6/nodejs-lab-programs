import http from 'http';

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/students') {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write('<h1>Student Created</h1>');
        res.end();
    }
    // FIX: Changed from .startsWith('/students') to === '/students'
    else if (req.method === 'GET' && req.url === '/students') {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write('<h1>All students</h1>');
        res.end();
    }
    else if (req.method === 'GET' && req.url.startsWith('/students/')) {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write('<h1>Student Details</h1>');
        res.end();
    }
    else if (req.method === 'PUT' && req.url.startsWith('/students/')) {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write('<h1>Student updated</h1>');
        res.end();
    }
    else if (req.method === 'DELETE' && req.url.startsWith('/students/')) {
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write('<h1>Student details deleted</h1>');
        res.end();
    }
    else {
        res.writeHead(404, { 'content-Type': 'text/html' });
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
