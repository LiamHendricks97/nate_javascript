'use strict';

let pen = {
    type: " ballpoint",
    color:" blue",
    brand:" Bic"
};

let cake = {
    flavour: " chocolate",
    price: " 0.50 Madiba",
    layers: [" 0", " 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10"],
    occasion: " wedding"

}

// semicolons separate objects
// console logs**********************************
console.log(pen);
console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);
console.log(pen.type + pen.brand + pen.color);
console.log("This pen is a" + pen.color + pen.type + pen.brand + ".");


// updated values********************************
cake.occasion = " funeral";
cake.flavour = " vanilla"
// cake.layers = 5*8;


// The cake**************************************
console.log("Come and buy our" + cake.flavour + " cake at only" + cake.price + " for one." + " At" + cake.layers[4] + " layers," + " It's perfect for a " + cake.occasion + ".");




// Same cake but with  a fucntion****************
function describe(cake) {
    let dxp = "Come and buy our" + cake.flavour + " cake at only" + cake.price + " for one." + " At" + cake.layers[4] + " layers," + " It's perfect for a " + cake.occasion + ".";
    return dxp;
}

console.log(describe(cake));



// 2nd cake *************************************
let cake2 = {
    flavour: " chocolate",
    price: " 0.50 Madiba",
    layers: [" 0", " 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10"],
    occasion: " wedding",

    describe: function() {
        let dxp = "Come and buy our" + this.flavour + " cake at only" + this.price + " for one." + " At" + this.layers[4] + " layers," + " It's perfect for a " + this.occasion + ".";
        return dxp;
    }
};

console.log(cake2.describe());


// intern object*********************************
let intern = {
    name: " Liam",
    surname: " Hendricks",
    job: " coffee maker",
    salary: " peanuts",

    describe: function() {
        let desciption = "My name is" + this.name + this.surname + " who will be working as a" + this.job + " for  a salary of" + this.salary + ".";
        return desciption;
    }
};
console.log(intern.describe())