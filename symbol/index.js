
const mySymbol = Symbol('user');

let obj = {
  [mySymbol]: {
    name: 'Darek',
    surname: 'Sibik'
  }
};

obj['user'] = {
    name: 'Marek',
    surname: 'Kowalski'
}

console.log(obj[mySymbol]); 
console.log(obj['user']);
console.log(obj)




