const http = require("http");
const secret =
  process.env.gotSecret === "true" ? "Has Secret" : "No Configured Secret";
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(`Hello, ${secret} '${process.env.gotSecret}'`);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
