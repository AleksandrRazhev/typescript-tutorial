const colors: string[] = ['red', 'green', 'blue'];

const dates = [new Date(), new Date()];

const fruitsByColor = [
    ['tomato'],
    ['apple'],
    ['peach']
];

const fruitsByColor1: string[][] = [];

const color = colors[0];
const color1 = colors.pop();

console.log(colors, color1);

// colors.push(true);

console.log(colors.map((item: string): string[] => item.split('').map(item => item.toUpperCase())));

const impotantsDate: (Date | string)[] = [new Date()];
impotantsDate.push('qwe');
impotantsDate.push(new Date());
console.log(impotantsDate);
