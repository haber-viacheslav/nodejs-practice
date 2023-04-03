const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url);

	res.write("<h1>Hello from H1</h1>");
	res.write("<h3>Hello from H3</h3>");
	res.write("<b>Hello from B</b>");
	res.write("<p>Hello from P</p>");
	res.end(
		'<div style="background-color: green; width: 300px; height: 200px "><h2>The end</h2></div>',
	);
});

server.listen(3230, () => {
	console.log("Server is running...");
});
