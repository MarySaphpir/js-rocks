// change places of biggest and smallest value of array
function changePlace(arr) {
    let biggestIndex = 0;
    let biggestValue;
    let smallestIndex = 0;
    let smallestValue;

    arr.forEach((value, index, array) => {
        if ( value >= array[biggestIndex] ) {
            biggestIndex = index;
            biggestValue = value;
        } else if ( value < array[smallestIndex] ) {
            smallestIndex = index;
            smallestValue = value;
        }
    });
    arr[biggestIndex] = smallestValue;
    arr[smallestIndex] = biggestValue;
    return arr;
}

// get repeated values
function getRepeatedValues(arr) {
    return arr.filter((value, index, array) => array.indexOf(value) !== index);
}

// get values that bigger than average
function getBiggerValues(array) {
    const average = array.reduce((a, b) => a + b, 0) / array.length;
    return array.filter(element => element > average);
}

// split string values to even and odd array
function splitString(string) {
    const array = string.split('').map(value => parseInt(value));
    const evenElements = array.filter(element => element % 2 === 0);
    const oddElements = array.filter(element => element % 2 !== 0);
    return [evenElements, oddElements];
}