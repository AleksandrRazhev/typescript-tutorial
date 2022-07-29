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

// class HoldAnything<TypeOfData> {
//   data: TypeOfData;
// }

// const holdNumber = new HoldAnything<number>();
// holdNumber.data = 3;

// const holdString = new HoldAnything<string>();
// holdString.data = "3";

// Compositions misconception

const rectangular = (state) => ({
  area: () => state.height * state.width,
});

const openable = (state) => ({
  toggleOpen: () => {
    state.open = !state.open;
  },
});
const buildRectangleWindow = (state) =>
  Object.assign(state, rectangular(state), openable(state));

const rectangleWindow = buildRectangleWindow({
  height: 30,
  width: 20,
  open: false,
});
