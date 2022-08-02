import { dateStringToDate } from "./util";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (item: string[]): MatchData => [
        dateStringToDate(item[0]),
        item[1],
        item[2],
        parseInt(item[3]),
        parseInt(item[4]),
        item[5] as MatchResult,
        item[6],
      ]
    );
  }
}
