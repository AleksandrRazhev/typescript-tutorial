class Vehicle{
    // public drive(): void {
    //     console.log('Drive')
    // }

    constructor(public color: string) {
    }

    public stop():void {
        console.log('Stop')
    }
    protected beep(): void {
        console.log('Beeep');
    }
}

class Car extends Vehicle {

    constructor(public wheels: number, color: string) {
        super(color);
    };

    private drive(): void {
        console.log('Drive a Car')
    }
    startDrive(): void {
        this.beep();
        this.drive();
    }
}

const vehicle = new Vehicle('black');
vehicle.stop();

const car = new Car(4, 'qwe');
// car.startDrive();
// car.stop();
console.log(vehicle.color);
console.log(car.color);
console.log(car.wheels);