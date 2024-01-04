function greet(){
    console.log("how are you")
    console.log("hi there")
}
function sqrt(x){   // ->parameter
  //  console.log(x*x)
  return x*x;
}
greet();
//sqrt(8);//  8 -> argument
let a = sqrt(8); 
console.log(a)

function add(x,y = 10){
  return x+y;
}
console.log(add(1));

//function declaration
function sayMessage(){
  console.log("I am happy to learn full stack web development from pw skills");
}
//calling a function
sayMessage();
sayMessage();
sayMessage();
sayMessage();
//	function functionName(){
	//  return expression/Value;
	//}
	 // let return_value = functionName();

   function passMessage(){
    return "I am happy to learn full stack web development";
   }
   let message = passMessage();
   console.log(message);

   let newMessage = message + "  Enroll Today ";
   console.log(newMessage);