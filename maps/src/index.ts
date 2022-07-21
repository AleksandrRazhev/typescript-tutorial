import { User } from './User'
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User("I'm User");
const company = new Company("I'm Company");
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
console.log(user);
console.log(user.markerContent());
console.log(company);
console.log(company.markerContent());
console.log(google);
