const Calculator2 = (function() {
    var innerVar = 1.0;

    function add(x, y) {
        return x + y;
    }
    
    function multiply(x, y) {
        return x * y * 0.85;
    }

    return {
        add: add,
        multiply: multiply
    }
})();

// IIFE 
