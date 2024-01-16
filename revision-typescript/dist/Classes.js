"use strict";
class Player {
    //   public health: string;
    //   private level: number;
    //   protected score: number;
    constructor(health, level, score) {
        this.health = health;
        this.level = level;
        this.score = score;
        (this.health = health), (this.level = level);
        this.score = score;
    }
    printDetails() {
        console.log(this.health);
        console.log(this.level);
    }
}
class AdminPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    //   get Level(): number {
    // return this.level;
    //   }
    get Score() {
        return this.score;
    }
    get myHealth() {
        return this.health;
    }
    set Health(h) {
        this.health = h;
    }
}
const player1 = new Player("100%", 10, 3000);
// player1.score = 534;
player1.printDetails();
