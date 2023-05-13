interface GreeterProps {
  person: string;
}

// destructure from `props`
const Greeter = ({ person }: GreeterProps): JSX.Element => <h1>{`Hello, ${person}!`}</h1>;

export { Greeter };
