function sum(number) {
    let currentSum = number;

    function nextSum(nextNumber) {
        currentSum += nextNumber;
        return nextSum;
    }

    return nextSum;
}