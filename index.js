// рекурсия
function number1(n) {
    return n <= 1 ? n : number1(n - 1) + number1(n - 2);
}

// цикл
function number2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
