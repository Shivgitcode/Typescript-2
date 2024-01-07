class Player {
  // protected first: string;
  private _last: string = "hello";
  // public middle: string;
  readonly score: number = 0;
  constructor(
    public first: string,
    public last: string,
    public middle: string
  ) {
    this.first = first;
    this.last = last;
    this.middle = middle;
  }
}
class AdminPlayer extends Player {
  printPlayers() {
    console.log(this.first);
  }
}

const player1 = new Player("shivansh", "Aggarwal", "yo");

const admin1 = new AdminPlayer("tanishka", "kautish", "yo");

admin1.score = 10;
// console.log(admin1.first)
// console.log(admin1.last)

console.log(player1.first);
console.log(player1.last);
console.log(player1.middle);
console.log(player1._last);
