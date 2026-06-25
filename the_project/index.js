const http = require('http');

// Read port: 3000
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Todo App Backend\n');
});

server.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
