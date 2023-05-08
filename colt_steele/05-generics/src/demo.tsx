// No issue
// function getRandomElement<T>(arr: T[]): T {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// Add trailing comma for `.tsx` file using arrow function
const getRandomElement2 = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
