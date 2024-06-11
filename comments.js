// Create web server
const server = http.createServer((req, res) => {
    const { url } = req;
    if (url === '/skills') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(skillsMember()));
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
    }
});