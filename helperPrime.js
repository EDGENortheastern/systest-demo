const isPrime = (number) => {
    if (number <= 1) return false; // Prime numbers are greater than 1
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false; // If divisible by any number other than 1 and itself, it's not prime
    }
    return true;
}

module.exports = isPrime;