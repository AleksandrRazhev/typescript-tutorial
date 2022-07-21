import { CsvFileREader } from "./csvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new csvFirleREader("football.csv");
reader.read();

console.log(reader.data[0]);

let manUnitedWin: number = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`Man United won ${manUnitedWin} times`);
