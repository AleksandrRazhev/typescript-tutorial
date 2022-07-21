const today = new Date();
today.getMonth();

const person = {
    age: 21
}

class Color{
    qwe: string = 'qwe';
    logQwe = () => console.log(this.qwe);
}

const red = new Color();
console.log(red.qwe);
red.logQwe();