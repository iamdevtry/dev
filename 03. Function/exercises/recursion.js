const isOddRecursive = (n) => {
    if (n == 0) {
        return false;
    } else if (n == 1) {
        return true;
    } else if (n < 0) {
        return isOddRecursive(-n);
    } else {
        return isOddRecursive(n - 2);
    }
}

console.log(isOddRecursive(5))