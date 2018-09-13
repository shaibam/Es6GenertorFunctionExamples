const URI = 'some.json';

//generator yields every step of fetch promise
function* fetchGenerator() {
    const response = yield fetch(URI);        
    const json = yield response.json(); // will only work if the data is passed using the .next()
    return json
}

const gen = fetchGenerator();
const fetchSteps = (data) => {
    const iterator = gen.next(data);    
    console.log('iterator',iterator)
    if (!iterator.done)
        iterator.value.then((data) => { fetchSteps(data) });
    else
        document.body.innerHTML = JSON.stringify(iterator.value);

}
fetchSteps();
