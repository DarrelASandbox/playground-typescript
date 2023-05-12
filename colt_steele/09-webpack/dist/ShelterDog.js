import { Dog } from './Dog.js';
class ShelterDog extends Dog {
    constructor(name, breed, age, shelter) {
        super(name, breed, age);
        this.shelter = shelter;
    }
}
export { ShelterDog };
