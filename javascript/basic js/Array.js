let a = [1,2,3,4,"Rahul",false];
console.log(a);

 let b = new Array(5);
console.log(b);

console.log(a[4]);
//given Array -> [11,21,31,41,51]
//index /pos -> [0,1,2,3,4]// last element index = arr.length -1;
a[4] = 5;
console.log(a);


let arr = [1,2,3,4,5];
arr.push(6,7);
console.log(arr);

//last index element remover
arr.pop();
console.log(arr);

//shifting starting position
arr.shift();
console.log(arr);

//starting postion par element put karna
arr.unshift(9);
console.log(arr);

let a1 = [14,24,34,45,51];
let a2 = [36,42,53];
let a3 = a1.concat(a2);
console.log(a1,a2,a3);

let s = a3.join("@");
console.log(s)
a3.reverse();
console.log(a3)
console.log(a3.indexOf(74))

let arr1 = [1,2,3,4,5,6]//    3->5 tak return karna
console.log(arr1.slice(2,5))

arr1.splice(2,3,11); // 2 index se next  3 element ko remove kar 11 put kar do
console.log(arr1)