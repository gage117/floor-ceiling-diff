const perf = require('execution-time')();

let average = (array) => array.reduce((a, b) => a + b) / array.length;

const floorResults = [];

for (let i = 0; i < 10000; i++) {
    perf.start();

    let num = 2.5;
    num = Math.floor(num);

    perfResult = perf.stop();
    floorResults.push(perfResult.time)
}

const ceilResults = [];

for (let i = 0; i < 10000; i++) {
    perf.start();

    let num = 2.5;
    num = Math.ceil(num);

    perfResult = perf.stop();
    ceilResults.push(perfResult.time)
}
const floorAverage = average(floorResults);
const ceilAverage = average(ceilResults);
const diff = floorAverage - ceilAverage;

console.log(`Floor Average: ${floorAverage}`);
console.log(`Ceil Average: ${ceilAverage}`);
console.log(`Time diff (floor - ceil): ${diff}`);