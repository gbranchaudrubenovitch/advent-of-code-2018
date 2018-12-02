import { readFileSync } from "fs";

var readAllLinesOf = (path) => {
  return readFileSync(path, "utf8").replace(/\r?\n|\r/g,"\n").split("\n");
};
  
var dropEmptyLines = (lines) => {
  return lines.filter((l) => l.length !== 0);
};
  
const readAllLines = (path, includeEmptyLines) => {
    var allLines = readAllLinesOf(path);
    return includeEmptyLines ? allLines : dropEmptyLines(allLines);
};

export { readAllLines };
