"use strict";
// const add = (a: number, b: number): number => a + b;
// add(10, 1);
// add(10, 2);
// add(10, 3);
// class HoldNumber {
//   data: number = 0;
// }
// class HoldString {
//   data: string = "0";
// }
// const holdNumber = new HoldNumber();
// holdNumber.data = 3;
// const holdString = new HoldString();
// holdString.data = "3";
class HoldAnything {
}
const holdNumber = new HoldAnything();
holdNumber.data = 3;
const holdString = new HoldAnything();
holdString.data = "3";
