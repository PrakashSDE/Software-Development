const htpp = require('htpp');
const hostname = '127.0.0.1';
const port = 3000;

const server = htpp.createServer((req,res)=>{
  res.statusCode = 200;
  res.end('Hello World\n');
})

server.listen(port,hostname,() => {
  console.log(`Server running at http://${hostname} : ${port}/`);
});

