const app = require('./app');
const http = require('http');

let port = process.env.PORT || 9000;

app.set("port" , port);

const server = http.createServer(app);

server.listen(port , () => {
    console.log(`Server listening on port: ${port}`);
})