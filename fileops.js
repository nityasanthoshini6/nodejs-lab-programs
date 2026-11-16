import fs from "fs"; 

const data = "This is a sample text file created using synchronous file operations in Node.js"; 
fs.writeFileSync('sample.txt', data, 'utf8');
console.log('File created successfully using synchronous file operations'); 
const readData = fs.readFileSync('sample.txt', 'utf8');
console.log('File read successfully using synchronous file operations');
console.log(readData);
fs.appendFileSync('sample.txt', "\nThis is additional text appended to the file.", 'utf8');
console.log('Data appended successfully');

