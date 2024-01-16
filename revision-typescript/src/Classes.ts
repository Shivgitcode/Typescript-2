class Player {
  //   public health: string;
  //   private level: number;
  //   protected score: number;

  constructor(
    public health: string,
    private level: number,
    protected score: number
  ) {
    (this.health = health), (this.level = level);
    this.score = score;
  }

  printDetails() {
    console.log(this.health);
    console.log(this.level);
  }
}

class AdminPlayer extends Player {
  isAdmin: boolean = true;

  //   get Level(): number {
  // return this.level;
  //   }

  get Score(): number {
    return this.score;
  }

  get myHealth(): string {
    return this.health;
  }

  set Health(h: string) {
    this.health = h;
  }
}

const player1 = new Player("100%", 10, 3000);

// player1.score = 534;

player1.printDetails();
