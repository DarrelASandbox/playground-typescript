// annotating classes
class Player {
  constructor(
    public first: string,
    public last: string,
    private _score: number = 0,
    readonly readme: string = 'This a new player.'
  ) {}

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  // use underscore so there is no conflict with getter `score`
  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error('Score cannot be negative.');
    this._score = newScore;
  }
}

const elton = new Player('Elton', 'Steele');
console.log(elton.fullName);
console.log(elton.score);
