const { Console } = require('console');
const fs = require('fs');

console.log('Read start');
// Asyncronous way to read file
fs.readFile('input.txt', function(err, data){
    if(err) {
        console.log('Error:',err );
        return err;
    }
Console.log('Data',data);
console.log('READ END');
return data;
});