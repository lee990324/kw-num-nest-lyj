
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

function prime(numbers) {
    // TODO
    return false;
}

function factorial(num) {
    // TODO
    return -1;
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