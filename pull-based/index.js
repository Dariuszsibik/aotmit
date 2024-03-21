// Producent generuje strumień danych
const colors = [
    'red',
    'blue',
    'pink',
    'white',
    'black',
    'yellow',
    'green',
    'LightCoral',
    'Aqua',
    'Gray'
];

function* generator() {
    for(color of colors) {
        yield color; // Generowanie kolejnych danych
    }
}

const iterator = generator();

const chart1 = [iterator.next().value, iterator.next().value, iterator.next().value];
const chart2 = [iterator.next().value, iterator.next().value, iterator.next().value];
const chart3 = [iterator.next().value, iterator.next().value, iterator.next().value];