const { contacts, listContacts, addContact, getContactById, removeContact } = require("./contacts");
const http = require("http");
const fs = require("fs").promises;
const PORT = 3008;

const manifest = fs.readFile("./package.json", "utf8");

// const { user, sayHello } = require("./user");

//////
// sayHello("Hello My friend!");
// console.log(user);
// console.log("Hello", __dirname);
// console.log("Bye", __filename);
const getContacts = async (data) => {
	try {
		const data = await contacts.then((data) => JSON.parse(data));
		return data;
	} catch (e) {
		console.log(e.massage);
	}
};
const data = getContacts(contacts);

// const requestHandler = (req, res) => {
// 	console.log(req);
// 	res.writeHead(200, { "Content-type": "text/html" });
// 	res.end("<h1>Head</h1>");
// };

const requestHandler = async (req, res) => {
	const manifest = await fs.readFile("./package.json", "utf8");
	if (req.url.indexOf("/home") >= 0) {
		res.writeHead(200, { "Content-type": "text/json" });
		return res.end(manifest);
	}
	res.writeHead(200, { "Content-type": "text/json" });
	return res.end(JSON.stringify({ url: "other page" }));
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
	if (err) {
		console.error("Error at a server launch", err);
		return;
	}
	console.log(`Server is running at port: ${PORT}...`);
});
