var fs = require("fs");

//To make a folder 
fs.mkdirSync("day_1");

//To create a file inside the folder
fs.writeFileSync("day_1/hello.txt", "I'm content inside the file");

//To append the new text into the file
fs.appendFileSync("day_1/hello.txt", " I'm appended by the append function");

//To read the content in the file 
var data = fs.readFileSync("day_1/hello.txt", "utf-8");
console.log(data);

// To rename the file 
fs.renameSync("day_1/hello.txt", "day_1/content.txt");

//To delete the file 
fs.unlinkSync("day_1/content.txt");

//To delete the whole folder
fs.rmdirSync("day_1");
