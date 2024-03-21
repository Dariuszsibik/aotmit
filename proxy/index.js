
const productPrices = {
    "product1": 31,
    "product2": 35,
    "product3": 200,
    "product4": 250,
    "product5": 420
}

const tax = 0.21;

const calculateTax = {
    get(target, prop) {
        const value = target[prop];
        return {
            basePrice: value,
            finalPrice: value * tax + value,
            tax: value * tax,
        }
    },
};

let proxy = new Proxy(productPrices, calculateTax);

console.log(proxy.product1)