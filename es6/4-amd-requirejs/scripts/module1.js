define([], function() {
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
})