const URI = 'some.json';
function* fetchGenerator(data) {
    const response = yield fetch(URI);    
    const json = yield response.json();
    return json
}
const gen = fetchGenerator();
const fetchSteps = (data) => {
    const iterator = gen.next(data);    
    if (!iterator.done)
        iterator.value.then((data) => { fetchSteps(data) });
    else
        document.body.innerHTML = JSON.stringify(iterator.value);

}
fetchSteps();
