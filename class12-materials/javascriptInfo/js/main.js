function pow(base, exponent) {
    let result = 0;

    if (exponent === 0) {
        return 1;
    } else if (exponent === 1) {
        return base;
    } else {
        let result = base * base;
        while (exponent > 2) {
            result = result * base;
            exponent = exponent - 1;
        }
        return result;
    }
}

console.log(pow(2, 4));
console.log(pow(9, 3));
console.log(pow(45, 1));
console.log(pow(123, 0));