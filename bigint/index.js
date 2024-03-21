
// Typ BigInt w JavaScript został wprowadzony 
// w celu reprezentowania liczb całkowitych o dowolnej precyzji.  

const maxNumber = 9007199254740992;
maxNumber + 1 // wartość się nie zmieni

const bigNumber = BigInt(maxNumber + 1);
const anotherBigNumber = BigInt(9007199254740992 * 2);

anotherBigNumber > bigNumber // true

console.log(anotherBigNumber)
//  sufiks n jest dodawany do końca liczby



