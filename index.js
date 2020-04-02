function mergeUnique(arr1, arr2) {
    return arr1.concat(arr2.filter(element => arr1.indexOf(element) < 0))
}
