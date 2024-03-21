requirejs(['module1', 'module2'], function (mod1, mod2) {
    const addResult = mod1.add(3, 4);
    const multiplyResult = mod1.multiply(3, 4);

    const addResult2 = mod2.add(3, 4);
    const multiplyResult2 = mod2.multiply(3, 4);

    document.querySelector('#result').innerHTML = addResult;
    document.querySelector('#result2').innerHTML = multiplyResult;
    document.querySelector('#result3').innerHTML = addResult2;
    document.querySelector('#result4').innerHTML = multiplyResult2;
})