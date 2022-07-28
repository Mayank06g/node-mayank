const http = require('http');

const  HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Hello Kohler hackathon ');

});

server.listen(PORT ,HOSTNAME, ()=>{
    console.log((`server runing ${HOSTNAME} on port ${PORT}`));
});