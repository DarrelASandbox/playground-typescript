import { Dog } from './Dog.js';

class ShelterDog extends Dog {
  constructor(name: string, breed: string, age: number, public shelter: string) {
    super(name, breed, age);
  }
}

export { ShelterDog };
