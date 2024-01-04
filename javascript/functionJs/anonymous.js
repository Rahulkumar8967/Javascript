let x = function(){  
    console.log("hi")   // anonymous function expression
}
x();   

(function exec() {    // immediately named function expression == self function expression
    console.log("named")
})();  

(function (x) {
    console.log(x*x);    // anonymous function expression m immediate invoke
})(5);