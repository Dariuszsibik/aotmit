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
const iterator2 = generator();
const iterator3 = generator();

const chart1 = [iterator.next().value, iterator.next().value, iterator.next().value];
const chart2 = [iterator2.next().value, iterator2.next().value, iterator2.next().value];
const chart3 = [iterator3.next().value, iterator3.next().value, iterator3.next().value];

console.log(chart1, chart2, chart3)
