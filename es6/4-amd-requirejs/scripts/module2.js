define(['utils'], function(utils) {
    function add(x, y) {
        return utils.big - x + y;
    }
    
    function multiply(x, y) {
        return x * y * utils.percent;
    }

    return {
        add: add,
        multiply: multiply
    }
})