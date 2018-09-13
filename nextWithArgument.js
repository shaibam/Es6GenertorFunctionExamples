function* generator(x) {
    yield x;
    yield ++x;
    var y = ++x;    
    yield y;
    y = yield ++y;
    return y
}

let gen = generator(1);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next("I am Y"));