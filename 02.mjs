import { readAllLines } from "./resources.mjs";

const boxIds = readAllLines("02-input");

let boxesWith2Letters = 0;
let boxesWith3Letters = 0;
for(let currentBoxId of boxIds) {
    let occuringLetters = new Map();
    for (let letter of currentBoxId) {
        let occurences = occuringLetters.get(letter) || 0;
        occuringLetters.set(letter, occurences + 1);
    }

    let occurenceValues = Array.from(occuringLetters.values());
    boxesWith2Letters += occurenceValues.find((v) => v == 2) ? 1 : 0;
    boxesWith3Letters += occurenceValues.find((v) => v == 3) ? 1 : 0;
}

console.log("d02p1 - the checksum is", boxesWith2Letters * boxesWith3Letters);
