// Implementing dynamic programming with cache to calculate the nth Fibonacci number

const cache = {};

function fibonacci(n) {
    // check if the result is already in the cache
    if (n in cache) {
        return cache[n];
    }

    // define base cases
    if (n === 0 || n === 1) {
        return n;
    }

    // calculate the result recursively and store in cache
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = result;

    return result;
}

console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765
console.log(fibonacci(30)); // Output: 832040
