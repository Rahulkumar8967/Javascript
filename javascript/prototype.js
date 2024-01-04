 let myHeros = ["thor", "spiderman"]
 let dcHeros = ["batman","flash","superman"]

 let heroPower = {
    thor:"hammer",
    spiderman : "sling",
getSpidermanPower: function(){
    console.log(`spidy power is ${this.spiderman}`);

}
}
Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);

}
console.log(myHeros.hitesh());
console.log(heroPower.hitesh());

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hi`);
}
console.log(myHeros.heyHitesh());
// console.log(heroPower.heyHitesh());

// inheritance
const User = {
    name: "top name",
    email: "top@gmail.com"
}
const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvailable:false
}
const TAAssignment = {
    makeAssignment: "js Assignment",
    fulltime: true ,
    __proto__:TeachingSupport

}

// teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport , Teacher)
console.log(TAAssignment.isAvailable);

String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`);
}
"hitesh  ".truelength()
"Rahul ".truelength()


