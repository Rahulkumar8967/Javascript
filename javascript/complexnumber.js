class ComplexNumber {
    #real;
    #imag;
    constructor(r,i){
        this.#real = r;
        this.#imag = i;
    }

    display(){
       console.log(this.#real ,"+" ,this.#imag ,"i" ); 
    }

    get real() {
        return this.#real;
    }
    addComplexNumber(c) {
this.#real += c.real;
this.#imag += c.imag;
    }
    get imag() {
        return this.#imag;
    }

}

const c1 = new ComplexNumber(3,4);
c1.display();
const c2 = new ComplexNumber(4,5);
c1.addComplexNumber(c2);
c1.display();