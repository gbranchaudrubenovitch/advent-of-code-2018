var fs = require("fs");

var readAllLines = (path) => {
    return fs.readFileSync(path, "utf8").replace(/\r?\n|\r/g,"\n").split("\n");
};

const inputLines = readAllLines("d01-input");

let total = inputLines.reduce((sum, current) => sum += current * 1, 0);
console.log("d01p1 - resulting frequency is", total);

let repeatingFrequencyFound = false;
let previousTotals = new Map();
previousTotals.set(0, true);
let runningTotal = 0;
while (!repeatingFrequencyFound) {
    for(let l of inputLines) {
        runningTotal += l * 1;

        if (previousTotals.get(runningTotal)) {
            repeatingFrequencyFound = true;
            break;
        }
        previousTotals.set(runningTotal, true)
    }
}

console.log("d01p2 - 1st frequency reached twice is", runningTotal);
