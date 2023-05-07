// annotating classes
class Player {
  first: string;
  last: string;
  private score: number = 0; // class field
  readonly readme: string = 'This a new player.';

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton = new Player('Elton', 'Steele');
