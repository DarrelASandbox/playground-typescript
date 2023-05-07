// annotating classes
class Player {
  constructor(
    public first: string,
    public last: string,
    private score: number = 0,
    readonly readme: string = 'This a new player.'
  ) {}
}

const elton = new Player('Elton', 'Steele');
