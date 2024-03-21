const users = [
    { name: 'mariusz', surname: 'kowal', age: 17, id: 1 },
    { name: 'anna', surname: 'kowalski', age: 22, id: 2 },
    { name: 'mateusz', surname: 'nowak', age: 23, id: 3 },
    { name: 'ignacy', surname: 'kowalski', age: 33, id: 4 },
    { name: 'natalia', surname: 'kowal', age: 35, id: 5 },
    { name: 'wojciech', surname: 'nowak', age: 56, id: 6 }
];

// utwórz nową listę samych imion: ['mariusz', 'anna' ...] i wyświetl w konsoli


let result = users.map((el) => el.name);

console.log(result)
