// Why do we get undefined when we log out the number this time?

var fs = require('fs'); // require is a special function provided by node
var myNumber = undefined; // we don't know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents, 10);
    myNumber++;
    console.log(myNumber);
  });
}

addOne();

