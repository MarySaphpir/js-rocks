// Object.create polyfill
function objectCreate(obj) {
    function Constructor() {}
    Constructor.prototype = obj;
    return new Constructor();
}

// Stringy Strings
function stringy(size) {
    let arr = [];
    for(let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            arr[i] = '1';
        } else {
            arr[i] = '0';
        }
    }
    return arr.join('');
}

// Sum of two min values
function sum(arr) {
    const firstMinValue = Math.min.apply(null, arr);
    const filteredArray = arr.filter(element => element !== firstMinValue);
    const secondMinValue = Math.min.apply(null, filteredArray);
    return firstMinValue + secondMinValue;
}
