// Object.create polyfill
function objectCreate(obj) {
    function Constructor() {}
    Constructor.prototype = obj;
    return new Constructor();
}

// Function.bind polyfill
function functionBind(context) {
    const fn = this;
    return function () {
        return fn.apply(context);
    };
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

// Find the divisors!
function findDivisors(number) {
    const arr = [];
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            arr.push(i);
        }
    }
    if (arr.length === 0) {
        return `${number} is prime`;
    }
    return arr;
}

// Two Sum
function twoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (j !== i && arr[i] + arr[j] === target) {
                return `(${i}, ${j})`;
            }
        }
    }
}

// List Filtering
function filter(arr) {
    return arr.filter(element => typeof element !== 'string');
}
