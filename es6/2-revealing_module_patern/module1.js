const Calculator = (function() {
    var innerVar = 1.0;

    function add(x, y) {
        return x + y;
    }
    
    function multiply(x, y) {
        return x * y;
    }

    return {
        add: add,
        multiply: multiply
    }
})();

// IIFE 
