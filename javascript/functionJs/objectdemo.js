//let obj = {id: 101,name: 'alex',salary: 1000};
//let emp = new Object();
//emp.id = 132;
//emp.name = "Rahul";
//console.log(emp);
//console.log(obj);

//// comment => function constructor
//function Emp(i,n,s){
  //  this.id = i;
    //this.name = n;
    //this.salary = s;

//}
//const e =  new Emp(103,"Any",12000);
//console.log(e);

//console.log(emp.id);  object ki value ko fetch kar sakte ho
//console.log(emp['name']);  object ki value ko fetch kar sakte ho
// emp.salary = 13000;
//emp['salary'] = 13000;
//emp.id = 13;
//emp.name = "mr. cool";
//delete emp.id;
//console.log(emp);

let emp = {   // object
    id: 101,
    name: 'Rahul',
    age: 19
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

//Object.freeze(emp); //pura object freezes

Object.seal(emp); //addition and deletion not allow ,updation allow
emp.id = 100;

console.log(emp);


// purane object ki value ko new object m assign karke new object
let o = Object.assign({x:16},emp);
console.log(o);