// 1. one parameter , and a single return statement
const Square = x => x * x;

// 2. Multiple parameters, and a single return expression
const sumOftwoNumbers = (x, y) => x + y;

// 3. Multiple statements in function expression
const sum = (x, y) => {
    console.log(`Adding ${x} and ${y}`);
    return x + y;
    };
    // 4. Returning an object
const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y });

// CALLING A FUNCTION
let output1 = Square(5); // OUTPUT: 25
let output2 = sumOftwoNumbers(1, 2); // OUTPUT: 3
let output3 = sum(1, 2);

console.log("Output 1:", output1);
console.log("Output 2:", output2);
console.log("Output 3:", output3);

let output4 = sumAndDifference(4, 6);
console.log("Output 4:", output4);