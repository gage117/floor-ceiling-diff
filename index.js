const perf = require('execution-time')();

const results = [];

let average = (array) => array.reduce((a, b) => a + b) / array.length;

for (let i = 0; i < 10000; i++) {
    perf.start();

    let num = 2.5;
    num = Math.floor(num);

    perfResult = perf.stop();
    results.push(perfResult.time)
}
console.log(Math.ceil)

console.log(average(results));