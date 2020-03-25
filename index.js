function compare(arr1, arr2) {
    const similarities = [];
    arr1.forEach( element => {
        if (arr2.includes(element)) {
            similarities.push(element);
        }
    });
    return similarities;
}