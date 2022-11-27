const add = (showAnswer: boolean, description: string, n1: number, n2: number) =>
  showAnswer && console.log(description + (n1 + n2));

const printAnswer = true;
const num1 = 5;
const num2 = 2.8;
const description = `${num1} + ${num2} = `;

add(printAnswer, description, num1, num2);
