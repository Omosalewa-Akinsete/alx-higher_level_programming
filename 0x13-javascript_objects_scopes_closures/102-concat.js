#!/usr/bin/node
const fs = require('fs');
const [, , file1, file2, destination] = process.argv;
const readStream1 = fs.createReadStream(file1);
const readStream2 = fs.createReadStream(file2);
const writeStream = fs.createWriteStream(destination, { flags: 'a' });
readStream1.pipe(writeStream);
readStream2.pipe(writeStream);
console.log('Files concatenated successfully!');
