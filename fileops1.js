import fs from "fs"; 
const data = "This is a sample text file created using asynchronous file operations in Node.js"; 
console.log("Before writing");
fs.writeFile('sample1.txt', data, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File created successfully using asynchronous file operations'); 
});
 console.log("After writing");
 console.log("Before reading");
fs.readFile('sample1.txt', 'utf8', (err, readData) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File read successfully using asynchronous file operations');
    console.log(readData);
});
console.log("After reading");
console.log("completed writing file asynchronously");
console.log("Before appending");
const appendData = "\nThis is the appended text added asynchronously.";
fs.appendFile('sample1.txt', appendData, 'utf8', (err) => {
    if (err) {
         console.error('Error appending file:', err);
         return;
    }
    console.log('File appended successfully using asynchronous file operations');
    console.log("After appending");
});
fs.readFile('sample1.txt', 'utf8', (err, readData) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File read successfully after appending');
    console.log(readData);
});
