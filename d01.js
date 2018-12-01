var fs = require("fs");

var readAllLines = (path) => {
    return fs.readFileSync(path, "utf8").replace(/\r?\n|\r/g,"\n").split("\n");
};

const inputLines = readAllLines("d01-input");

let total = inputLines.reduce((sum, current) => sum += current * 1, 0);
console.log("d01p1 - resulting frequency is", total);
