class product {
   // name;
  // price;
  //rating
  #rating;

  constructor(n,p,r) {
    console.log("calling the constructor");
    this.name = n;
    this.price = p;
    this.#rating = r;
 // return 10; if you're returning primitive then it will be avoided in constructor
 // return { x:0 , y:20} // if you return non primitive then it will be returned 
  }

 // behaviour -> functions -> member functions

static custom(){
   console.log("calling a static method");
}

get ratingGetter(){
   console.log(this.#rating);
}
 set ratingSetter(r){
   if(r < 0){
      this.#rating = r;
   }
}

display(){ 
 // console.log("this refers to " ,this);
    console.log("displaying the current product" , this.name , this.price ,this.#rating);
  }
 }

 const p = new product("iphone",100000 ,5); // new creates an empty plain objects 
 // -> in the above piece of code we are calling the constructor method
console.log(p);
p.ratingSetter = 20;
p.ratingGetter;

  //p.setRating(10);
//p.getRating();
 p.display();
product.custom();
