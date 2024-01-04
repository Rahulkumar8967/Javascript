const OneArray = [1,2,3,4]
const twoArray = [5,6,7,8]

//const threeArray = OneArray.concat(twoArray)
//  const threeArray= [oneArray,twoArray]
 const threeArray = [...OneArray , ...twoArray]  //spread operator
 
console.log(threeArray);

// ++++++++++++++++++++++++++++++++++
// Rest
function manyArguments(){
console.log(typeof arguments);
    let args = Array.from(arguments)
    let finalArr = args.map( e => e)
    console.log(finalArr);
}

function manyArgumentv2(...args){
console.log(typeof args);
let finalArr = args.map( e => e)
console.log(finalArr);
}

//manyArguments(1,2,3)
//manyArgumentv2(1,2,3)

// ++++++++++++++++++++++++++++
const names = ["superman" ,"flash"]
const newNames = ["batman", ...names , "thor"]

const sitename = "pwskills"
console.log([...sitename]);

// Rest 
function pwskills( ...values){
    return values
}
console.log(pwskills("superman","flash"));
