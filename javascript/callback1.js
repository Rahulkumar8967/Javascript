function h(x ,fn){
    // h -> is a hof
    // fn -> call back
    console.log(x*x);
    fn(x*x);
}
  // h(10, function() {
  //  console.log("done with callback");
//})

h(10 ,exec)

function exec(n) {
console.log("square value is" ,n);
}

console.log("start");
setTimeout( function f() {
    console.log("timer done 1");
}, 300);
setTimeout( function f() {
    console.log("timer done 2");
}, 400);
console.log("end");
for( let i = 0; i<1000000;i++){
    
}
