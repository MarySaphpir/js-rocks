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
