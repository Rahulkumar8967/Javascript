let emptySet = new Set()
// console.log(emptySet.size);

let myArray = [1,2,3,4,3,2]  //store unique value
let newSet = new Set([...myArray])
console.log(newSet);

newSet.add(6);
 //newSet.clear();
console.log(newSet);
// console.log(newSet.has(9));  //return true and false

// set difference  
function setDifference(setA ,setB){
// finding the intersection of two element
  return new Set([...setA].filter(el => !setB.has(el)))
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++

let map = new Map()

console.log(map.size);



let arr = [
[ 1, "mithun"],
[2, "Alka"],
[3, "prabir"],
[4, "shivam"],
[5, "vinay"],
];

//  ARRAY PAR LOOP
arr.map((arrayItem) =>  map.set(arrayItem[0] ,arrayItem[1])  )