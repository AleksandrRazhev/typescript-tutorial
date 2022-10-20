class DecoratedCar {
  color: string = "white";

  get formattedColor(): string {
    return `This car color is ${this.color}`;
  }

  @logError
  drive(): void {
    throw new Error();
    console.log("I'm driving");
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log("The car is crashed");
    }
  };
}

new DecoratedCar().drive();
