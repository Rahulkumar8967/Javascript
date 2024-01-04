//variable and values
//oprators
//conditions and loop

//let age = 17;
//if(age >= 18){
   // console.log("YOU ARE ALLOWED");
//}
//else{
 //   console.log("YOU ARE NOT ALLOWED");
//}

let signal = "red";
if(signal == "red"){
    console.log("red => stop");
}else if(signal == "yellow"){
    console.log("yellow => Go Slow");
}
else if(signal == "Green") {
    console.log("Green =>Go fast");
}
else{
    console.log("Invalid");
}
//switch case
let user = "Mentor";
switch(user){ 
    case "Admin":
        console.log("he is Admin");
        break;
        case "Mentor":
            console.log("He is mentor");
            break;
            default:
                console.log("kuch mat kar");
}

//loops
//do while,while,for
//for(let i = 0;i < 5;i++){
  //  console.log(i);
//}
//let i = 0;
//while(i<5){
//console.log(i);
//i++;
//}

let i=0;
do {
console.log("hello world");
i++;
}while(i < 5);

//ternary op /ternary condtion
//condition ? true:false;

let isLoggedIn = false;
isLoggedIn ? console.log("home page") : console.log("login page");