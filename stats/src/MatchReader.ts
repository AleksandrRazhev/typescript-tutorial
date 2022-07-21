import { CsvFileREader } from "./csvFileReader";
import { MatchData } from "./csvFileReader";
import { dateStringToDate } from "./util";
import { MatchResult } from "./MatchResult";

export class MatchReader extends CsvFileREader {
  mapRow(item: string[]): MatchData {
    return [
      dateStringToDate(item[0]),
      item[1],
      item[2],
      parseInt(item[3]),
      parseInt(item[4]),
      item[5] as MatchResult,
      item[6],
    ];
  }
}
