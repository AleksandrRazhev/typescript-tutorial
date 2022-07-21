const add = (a: number, b: number): number => {
    return a+b
};

const sub = (a: number, b: number): number => {
    return a-b
}

function devided(a: number, b: number): number {
    return a/b
}

const multyply = function(a: number, b: number): number {
    return a*b
}

const logger = (message: string): void => {
    console.log(message);
    return undefined;
}

const throwError = (message: string): void => {
    if (!message) throw new Error(message);
}

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date, weather);
}
logWeather(todayWeather);