import fs from "fs";
import { MatchResult } from "./MatchResult";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export abstract class CsvFileREader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}

  abstract mapRow(item: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((item: string): string[] => item.split(","))
      .map(this.mapRow);
  }
}
