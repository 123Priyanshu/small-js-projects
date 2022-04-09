function prime(inputNum) {

    for (var count = 2; count < inputNum; count++) {
        var remainder = inputNum % count;

        if (remainder == 0) {
            console.log(`${inputNum} not a prime number`);
            return true;
        }

    }
    console.log(`${inputNum} a prime number`);
    return false;
}
prime(57)