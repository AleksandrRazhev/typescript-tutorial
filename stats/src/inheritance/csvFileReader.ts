import fs from "fs";

export abstract class CsvFileREader<T> {
  data: T[] = [];
  constructor(public fileName: string) {}

  abstract mapRow(item: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((item: string): string[] => item.split(","))
      .map(this.mapRow);
  }
}
