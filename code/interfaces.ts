interface Reportable {
    summary(): string
}

const oldCivic = {
    name: 'Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}, year: ${this.year}, broken: ${this.broken ? 'yes' : 'no'}`
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `Cola has ${this.sugar} sugar`
    }
};

const printReport = (obj: Reportable): void => {
    console.log(obj.summary());
}

printReport(oldCivic);
printReport(drink);