const profile = {
    name: 'Jack',
    age: 25,
    coordinates: {
        x: 22,
        y: 55
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age }: { age: number } = profile;

const { coordinates: { x, y } }:  { coordinates: { x: number, y: number } } = profile;