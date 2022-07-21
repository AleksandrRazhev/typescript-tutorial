const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];
const coffee: Drink = ['black', false, 0];

const carSpecs: [number, number] = [400, 3354];
const cdrSpecsObj = {horsepower: 400, weight: 3354};