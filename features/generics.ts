class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything([1, 3, 6]);

function printStrings(arr: string[]): void {
  for (let i in arr) {
    console.log(i);
  }
}

function printNumbrs(arr: number[]): void {
  for (let i in arr) {
    console.log(i);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i in arr) {
    console.log(i);
  }
}

printAnything<number>([1, 2, 6]);
