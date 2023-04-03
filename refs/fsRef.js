const fs = require("fs").promises;
const path = require("path");
// File System
console.log(__dirname);

// fs.writeFile(path.join(__dirname, "eventsRef.js"), 'console.log("New string")', (err) => {
// 	if (err) throw err;
// 	console.log("New file created");
// });

fs.writeFile(path.join(__dirname, "httpRef.js"), 'console.log("New string")', (err) => {
	if (err) throw err;
	console.log("New file created");
});

// fs.mkdir(path.join(__dirname, 'new'), (err) => {
//     if(err) throw err
//     console.log('Dir was created');
// })

// fs.writeFile(path.join(__dirname, "test", "filename.ts"), "//Hello new TS file", (err) => {   // создание файла
// 	if (err) throw err;
// 	console.log("File was created");

// 	fs.appendFile(path.join(__dirname, "test", "filename.ts"), "// New string in the file", (err) => { // добавление в него контента
// 		if (err) throw err;
// 		console.log("Added new data");

// 		fs.readFile(path.join(__dirname, "test", "filename.ts"), "utf8", (err, data) => { // чтение содержимого файла
// 			if (err) throw err;

// 			console.log(data);
// 		});
// 	});
// });

// fs.rename(
// 	path.join(__dirname, "test", "filename.ts"),
// 	path.join(__dirname, "test", "new.ts"),
// 	(err) => {
// 		if (err) throw err;

// 		console.log("Changed file name");
// 	},
// );


