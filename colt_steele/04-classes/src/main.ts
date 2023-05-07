// annotating classes
class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number = 0,
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

class Admin extends Player {
  private isAdmin: boolean = true;

  maxScore() {
    this._score = 99999;
  }

  get status(): boolean {
    return this.isAdmin;
  }
}

const elton = new Player('Elton', 'Steele');
const elton2 = new Admin('Elton', 'Admin');
console.log(elton.fullName);
console.log(elton.score);
console.log(`${elton2.fullName} isAdmin: ${elton2.status}`);
