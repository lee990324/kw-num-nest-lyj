
function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    /*
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    */
    return s / numbers.length;
}

function prime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factorial(num) {
    if (num < 0) return false;
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    return f;
}

module.exports = {
    avg,
    prime,
    factorial
}

/*
exports.avg = avg;
exports.prime = prime;
exports.factorial = factorial;
*/