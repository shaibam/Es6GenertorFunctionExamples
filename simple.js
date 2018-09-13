function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5
    //will never be reached
    yield 6;
}

let gen = generator();
//returned as iterator type object structor {value:%YIELDED_OR_RETURNED VALUE% , done:%BOOLEAN%}
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//resets the generator
gen = generator();
console.log(gen.next());