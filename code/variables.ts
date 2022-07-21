let oranges;
oranges = 0.4;
oranges = 'qwe';
let speed: string = 'qwe';
let hasDog = true;
let nothing: null = null;
let nothing1: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [12, 23, 45];
let results: boolean[] = [true, false, false];

class Car{};

let car: Car = new Car();

let point: {x: number; y: number} = {
    x: 10,
    y: 20,
}

const logNum: (i: number) => void = (i: number) => {
    console.log(i);
}

const json = '{"x":10,"y":20}'

const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);
coordinates.x;

let words = ['one', 'two', 'three'];
let isTwo: boolean;
isTwo = words.find(item => item === 'two1') ? true : false;
console.log(isTwo);

let newNumbers = [-10, -1, 12];

let positiveNum: boolean | number = false;
const num = newNumbers.findIndex(item => item > 0);
positiveNum = newNumbers[num] ? newNumbers[num] : false ;
console.log(positiveNum);
