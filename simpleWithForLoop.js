function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5
    //will never be reached
    yield 6;
}

let gen = generator()

for (var v of gen) {
    //iterator value param is logged in every loop iteration
    console.log(v)
}

gen = generator();
//dosent do anything
for (var i in gen) {    
    console.log(i)
}

//length dosent exist
console.log(gen.length)