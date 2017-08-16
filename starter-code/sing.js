console.log("sing.js loaded");

let userBeer = window.prompt("How many bottles of beer on the wall did you say there were?");
let userTest = /^\d+$/.test(userBeer);
while (userTest === false) {
    userBeer = window.prompt("Please enter an integer.  " +
        "How many bottles of beer on the wall did you say there were?")
    userTest = /^\d+$/.test(userBeer);
}
alert("Congrats, now check the console for a special song.");

for (let beer=parseInt(userBeer); beer >= 1; beer--) {
    if (beer === 1) {
        console.log(beer + " bottle of beer on the wall, " + "\n" + beer + " bottle of " +
            "beer on the wall! " + "\n" + "Take one down and pass it around, " + "\n" + "" +
            "No more bottles.")
    }
    else if (beer === 2) {
        console.log(beer + " bottle of beer on the wall, " + "\n" + beer + " bottle of " +
            "beer on the wall! " + "\n" + "Take one down and pass it around, " + "\n" + "" +
            (beer-1) + " bottle of beer on the wall!")
    }
    else {
        console.log(beer + " bottle of beer on the wall, " + "\n" + beer + " bottle of " +
            "beer on the wall! " + "\n" + "Take one down and pass it around, " + "\n" + "" +
            (beer-1) + " bottles of beer on the wall!")
    }
}