"use strict";
class Player {
    constructor(first, last, middle) {
        this.first = first;
        this.last = last;
        this.middle = middle;
        // protected first: string;
        this._last = "hello";
        // public middle: string;
        this.score = 0;
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
