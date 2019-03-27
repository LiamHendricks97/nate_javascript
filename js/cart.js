'use strict';

// let items = document.getElementByClassName("item");
// console.log(items)

let cart = [
    // {name: name , price: price,},
    // {name: name , price: price,},
    // {name: name , price: price,},
    // {name: name , price: price,},
    // {name: name , price: price,},
    // {name: name , price: price,},
];

function addCart(name, price) {
    
    // create item
    let item = {
        name: name,
        price: price,

    };


// check if arrary empty 

if (cart.length != 0) {
    // search an item in an array
    let check = false;
    for (let cartItem in cart) {
        if (cart[cartItem].name === item.name) {
            check = true;
        }
    }


    // if check returnsnflase, item was not found in array.
    if (!check) {cart.push(item) }

    // else push to array 
} else {
    cart.push(item);
}

// get cart div 
let div = document.getElementById("cart");
// clear cart
div.innerHTML = "";

// show cart with updated array
for (let value in cart) {

    // Create a <li> node
    let node = document.createElement("LI");
    // Create a text node
    let textnode = document.createTextNode(cart[value].name);

    // Append the text to <li>
    node.appendChild(textnode);

    // Append <li> to <ul> with id="myList"
    div.appendChild(node);
}
}

// STILL TO DO
// remove an item from cart
