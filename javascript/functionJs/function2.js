// function  with parameters

function displayMessage(messageToBeDisplayed = "I am proud student of pw skills") {
    console.log(messageToBeDisplayed);
}

// Calling the function with a custom message
displayMessage("I am happy to learn full stack web development");

// Calling the function without providing a custom message (uses the default message)
displayMessage();


// function with  two parameter and return value
function sumOfTwoNumbers([num1, num2]) {
    return num1 + num2;
}

let numbers = [10,40];
let result1 = sumOfTwoNumbers(numbers);
console.log(result1);


// unlimited numbers of parameters
function sumOfAllParameters() {
    let sum = 0;
    for (var i = 0; i < arguments.length; i++)
        sum += arguments[i];
    return sum;
}


let result2 = sumOfAllParameters(1, 2, 3, 4, 5);
console.log(result2);




