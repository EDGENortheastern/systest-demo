const { isPrime } = require('./helperPrime'); // Ensure you're importing the helper

describe("smoke test", () => {
    test("that Jest is working", () => {
        expect(2 + 2).toBe(4);
    });
});

describe("tdd the helper", () => {
    test("that 0 is not prime", () => {
        expect(isPrime(0)).toBe(false); // 0 is not prime
    });
    test("that 2 is a prime", () => {
        expect(isPrime(2)).toBe(true); // 2 is prime
    });
    test("that 97 is a prime", () => {
        expect(isPrime(97)).toBe(true); // 2 is prime
    });
});
