function compare1(arr1, arr2) {
    const similarities = [];
    arr1.forEach( element => {
        if (arr2.includes(element)) {
            similarities.push(element);
        }
    });
    return similarities;
}

function compare2(arr1, arr2) {
    return arr1.filter( element => arr2.includes(element));
}