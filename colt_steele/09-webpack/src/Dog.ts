class Dog {
  constructor(public name: string, public breed: string, public age: number) {}
  bark() {
    console.log('Woof woof');
  }
}

export { Dog };
