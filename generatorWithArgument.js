function* generator(x) {
    yield x;
    yield ++x;
    var y = ++x;    
    yield y;    
    y = yield ++y; //the y value is set to yield (undefined), not to ++y
    return y
}

//call generator with param to be used in generator function
let gen = generator(1);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());