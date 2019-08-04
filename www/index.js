import * as wasm from "wasm-game-of-life";

function calc_fibonacci_js(n) {
    if (n <= 1) {
        return n;
    } else {
        return calc_fibonacci_js(n - 1) + calc_fibonacci_js(n - 2);
    }
}

const baseNum = 47;
let startTime;

console.log('========================================');
startTime = Date.now();
console.log('Start calculate fibonacci by WASM');
console.log(`Fibonacchi ${baseNum} : ${wasm.calc_fibonacci(BigInt(baseNum))}`);
console.log(`Elapsed time : ${(Date.now() - startTime) / 1000}`);
console.log('========================================');
startTime = Date.now();
console.log('Start calculate fibonacci by JS');
console.log(`Fibonacchi ${baseNum} : ${calc_fibonacci_js(baseNum)}`);
console.log(`Elapsed time : ${(Date.now() - startTime) / 1000}`);
console.log('========================================');
