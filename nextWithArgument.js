function* generator(x) {
    yield x;
    yield ++x;
    var y = ++x;    
    yield y;
    y = yield ++y;
    return y
}

//call generator with param to be used in generator function
let gen = generator(1);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//when passing value as argument to .next() it is set to the value of the past called yield.
console.log(gen.next("I am Y"));