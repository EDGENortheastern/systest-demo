const isPrime = require('./helperPrime'); // Ensure you're importing the helper

describe("smoke test", () => {
    test("that Jest is working", () => {
        expect(2 + 2).toBe(4);
    });
});

describe("tdd the helper", () => {
    test("that 0 is not prime", () => {
        expect(isPrime(0)).toBe(false); // 0 is not prime
    });
});
