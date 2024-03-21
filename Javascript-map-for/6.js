const dataSet = [
    { name: 'Mariusz', id: '1' },
    { name: 'Anna', id: '2' },
    { name: 'Magda', id: '3' },
    { name: 'Monika', id: '4' },
    { name: 'Patrycja', id: '5' },
    { name: 'Edyta', id: '6' },
    { name: 'Natalia', id: '7' },
];

// napisz funkcję searchName która przyjmie tablicę dataSet oraz imię i zwróci id tego imienia
// UWAGA! użyj funkcji find

searchName(dataSet, 'Mariusz') // 1
searchName(dataSet, 'Monika') // 4
searchName(dataSet, 'Edyta') // 6
searchName(dataSet, 'Natalia') // 7
searchName(dataSet, 'Anna') // 2

