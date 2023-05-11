const add = (x: number, y: number): number => x + y;
const sample = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export { add, sample };
