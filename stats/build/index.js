"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const reader = new csvFirleREader("football.csv");
reader.read();
console.log(reader.data[0]);
let manUnitedWin = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWin++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWin++;
    }
}
console.log(`Man United won ${manUnitedWin} times`);
