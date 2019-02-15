

let number = Number(prompt("Type a number."));
    if (number > "0" ) {
        console.log (number + " is positive.");

    } else if (number < "0") {
        console.log (number + " is negative.");

    } else if (number === "0") {
        console.log (number + " is zero");

    } else {
        console.log ("That's not a number.")
    }

    if (number >=0 && number <= 100) {
        console.log (number + " is greater or equal than zero or but smaller or equal than 100");
    }

let weather = prompt("How is the weather looking?");
    sunny = " shorts and T-shirt";
    cold = " warm jacket and jeans";
    rainy = " raincoat";
    windy = " windbreaker";

    // if (weather ===  "sunny" ) {
    //     console.log ("Wear a" + sunny + ".");
    // } else if (weather ===  "cold") {
    //     console.log ("Wear a" + cold + ".");
    // } else if (weather === "rainy") {
    //     console.log ("Wear a" + rainy + ".");
    // } else  if (weather ===  "windy") {
    //     console.log ("Wear a" + windy + ".");
    // } else {
    //     console.log ("That's not the weather.")
    // }
 
    switch (weather) {
        case "sunny":
            console.log ("Wear a" + sunny + ".");
            break;

        case "cold":
            console.log ("Wear a" + cold + ".");
            break;

        case "rainy":
            console.log ("Wear a" + rainy + ".");
            break;

        case "windy":
            console.log ("Wear a" + windy + ".");
            break;
        default:
            console.log ("That's not the weather.");
            break;
    }


// let     fontSize = prompt("say 'test'");

// function clik() {
//     document.getElementById("test").className = "thisHasChanged";
// }
        
