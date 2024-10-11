const isPrime = (number) => {
    if (number <= 1) return false; // Prime numbers are greater than 1
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false; // If divisible by any number other than 1 and itself, it's not prime
    }
    return true;
}

// Conditional export for Node.js (Jest) environment
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { isPrime }; // Exports as an object for Node.js
  }