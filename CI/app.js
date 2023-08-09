// Import the built-in 'http' module
const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response content
  res.end('Hello, Node!\n');
});

// Specify the port number to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
