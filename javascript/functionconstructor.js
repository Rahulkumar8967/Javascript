function product(n,p,r){
  this.name = n;
  this.price = p;
  this.rating = r;

}
const p = new product("macbook",1500000 ,5);
console.log(p);

// Create the object and call the function
let x = {
    p : product 
};
// Call the product function with arguments
 x.p("airpods" ,2000 ,5);
// Log the object x and the result of the function call
console.log(x);
//console.log(result);
/* 
 1. 'this' keyword in js is diff than other language
 2. 'this' keyword refers to the context from where we called
 *  int the function consructor also
 * -> if you return primitive it is ignored and we return the object refered by this
 *  if you return a custom obj , then the custom obj is returned
 * if you don't return anything , then object referred by this is returned
 * 

*/