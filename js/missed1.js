
function Game(name, year, console) {
    this.name = name;
    this.year = year;
    this.console = console;
}

Game.prototype.describe = function () {
    let description = this.name + this.year + this.console;
    return description;
}

let test = new Game("Dota2", 2015, "computer");
console.log(test.describe());