const http = require('http');

const fs = require('fs')

let i = 0

const stream1= fs.createReadStream('input.txt', {
    highWaterMark: 1024
}).setEncoding('utf8')

 


stream1.on('data', chunk=>{
    i++
    let regex = /^[a-zA-Z0-9]/
    if(regex.test(chunk)){
    console.log(i, chunk)
    }
})
 stream1.on('end',()=>{
   console.log('done')
 })

 


/*
const server = http.createServer((req, res) => {
  // `req` is an http.IncomingMessage, which is a readable stream.
  // `res` is an http.ServerResponse, which is a writable stream.
   res.write('hallo')
  let body = '';
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added.
  req.on('data', (chunk) => {
    body += chunk;
  });

  // The 'end' event indicates that the entire body has been received.
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // Write back something interesting to the user:
      res.write(typeof data);
      res.end();
    } catch (er) {
      // uh oh! bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(1337);*/