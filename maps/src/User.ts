import faker from 'faker';
import { Mappable } from './CustomMap';
import { Qwe } from './CustomMap';

export class User implements Mappable, Qwe {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    text: string;
    markerContent = (): string => this.text + ' ' + this.name;
    color: string = 'qwe';
    qwe: string = 'qwe';

    constructor(text: string) {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
        this.text = text;
    }
}