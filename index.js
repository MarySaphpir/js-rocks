function mergeUnique(arr1, arr2) {
    const firstArray = getUniqueValues(arr1);
    const secondArray = getUniqueValues(arr2);
    return firstArray.concat(secondArray.filter(element => firstArray.indexOf(element) < 0))
}

function getUniqueValues(arr) {
    return arr.filter((value, index, array) => array.indexOf(value) === index);
}
