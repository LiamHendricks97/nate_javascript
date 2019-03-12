
// In addition tonits special properties, every javascript object has a internal property called a prototype. This is a link (known as a reference) to anouther object. Whe trying to access a property that does not existin a object, Javascript tries to find this property in the prototype of this object.

var anObject = {
    a:2
};


// Create anoutherObject using anObject as a prototype
var anoutherObject = Object.create(anObject);

console.log(anoutherObject.a);  //will show two

// the Javascript statement Object.create() is used to create the object anoutherObject based on the prototype until we get to the end of the prototype chain. If the property was found in objects, access retirns to the value undefined.

// Create anoutherObject using anObject as a prototype

console.log(anoutherObject.a); // will be 2
console.log(anoutherObject.b); // will be undefined

// This type of relationship betweeen Javascript projects is called delegation: an object delegates part of its operation to its prototype.

// Cake Prototype

var Pastry = {
    type: "",
    flavour: "",
    layers: 0,
    price: "",
    occasion: "",

    // describe the pastry
    describe :function() {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description;
    }
};

var muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavour = "blueberry";
muffin.layers = 1;
muffin.price = "R20";
muffin.occasion = "breakfast";

console.log(muffin.describe());

var cake = Object.create(Pastry);
cake.type = "cake";
cake.flavour = "vanilla";
cake.layers = "3";
cake.price = "R310";
cake.occasion = "birthday";

console.log(muffin.describe());
console.log(cake.describe());


// we created an object named Pastry, which brings together the properties common to all the characters. The cake and muffin are created via Pastry as a prototype, which delegates its features to them.

// The process of creatinng a Pastry is a little repetitive: for each character, you must successively give a value to each of its properties. You can do better by creating an intializtion function.


var Pastry = {
    // intialize the pastry
    init: function(type, flavour, layers, price, occasion) {
        this.type = type;
        this.flavour = flavour;
        this.layers = layers;
        this.price = price;
        this.occasion = occasion;
    },

 // describe the pastry
 describe :function() {
    var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
    return description;
},

bake: function(){
    var baked = "The " + this.type + " is placed in an oven oven for 7 minutes. Its done!"
    return baked
    }
};

var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "R310", "birthday");

console.log(muffin.bake());
console.log(muffin.describe());
console.log(cake.describe());


// The metod init() takes the intial property values of the pastry as parameters. The pastry creation code is therefore reduced to only 2 steps:

// The actual client Information, with the pastry 

// Create a game that has charcters, players and enemies. A player can atk a onpointerenter, yhe reverse is true as well.
// If char sees lp decrease from force of atk must see.
// if char lp runs out game ends or char is elimated.
// get exp equal to number of elimated enemies.  maybe coins too.

// firstly make protptype which is the char.
// the parameters = name, health, atk force.

// text based gamein console.