
// Create a game that has charcters, players and enemies. A player can atk a onpointerenter, yhe reverse is true as well.
// If char sees lp decrease from force of atk must see.
// if char lp runs out game ends or char is elimated.
// get exp equal to number of elimated enemies.  maybe coins too.

// firstly make protptype which is the char.
// the parameters = name, health, atk force.

// text based gamein console.





// Introduction****************************************************************
let heroName = prompt("What is your name?");
let startGame = prompt("enter 'start' to begin");
alert("adventure summary, story");

// player objects*****************************************************************
let player = {
    init: function(name, health, attack, defence, speed , shield) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defence = defence;
        this.speed = speed;
        this.shield = shield;
    },
}






// the items*******************************************************************
    let apple = 10;
    let sword = 10;
    let armour = 10;

    // let itemHealth = apple;
    // let itemAttack = sword;
    // let itemDefence = armour;
// add interactions here btw the two at a later stage
    let itemHealth = 0;
    let itemAttack = 0;
    let itemDefence = 0;
    let itemSpeed = 0;
    let itemShield = 0;






// base player stats****************************************************************
    let heroHealth = 100 + itemHealth;
    let heroAttack = 20 + itemAttack;
    let heroDefence = 15 + itemDefence;
    let heroSpeed = 10 + itemSpeed;
    let heroShield = 0 + itemShield;
    
// the hero********************************************************************
    let hero = Object.create(player);
    hero.init(heroName, heroHealth, heroAttack, heroDefence, heroSpeed, heroShield);





// base enemy stats************************************************************
    let enemyName = "example enemy";
    let enemyHealth = 20;
    let enemyAttack = 19;
    let enemyDefence = 18;
    let enemySpeed = 37;
    let enemyShield = 16;

// the enemy*******************************************************************
    let enemy = Object.create(player);
    player.init(enemyName, enemyHealth, enemyAttack, enemyDefence, enemySpeed, enemyShield);




// action variables************************************************************

// actual games****************************************************************
if (startGame === "start") {
    console.log("this is game, add summary here from the above alert");
    
    // the loop of events
    // the plan for below is to loop a certain amount of events together where you spot enemies, get treasure and mayne even add more advanced interactions with a npc.
    console.log("You see a " + enemyName);   //add random enemy generator here.
    console.log("What do you want to do?"); 
    let action = prompt("What do you want to do?");
    
    if (action === "attack") {
        if (heroSpeed >= enemySpeed) {
            enemyHealth - ((enemyDefence / 1.4) - heroAttack);
            
        } else {
            heroHealth - ((heroDefence / 1.4) - enemyAttack)
        }
    } else {
        console.log("Please choose a valid option");  //add a help section
    }

} else {
    console.log("fail.text(replace plz)")
}

// test console****************************************************************
console.log(hero.name);
console.log(enemy.attack);
console.log(hero.attack);
console.log(enemyHealth - ((enemyDefence / 1.4) - heroAttack))