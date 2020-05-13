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