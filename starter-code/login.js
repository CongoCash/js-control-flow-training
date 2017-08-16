console.log("login.js loaded");

let userLogin = {user:"david", pass:"123"};

let x = 1;
let counter = 3;
let userInput = window.prompt("This is not a scam, enter your password " + userLogin.user);

while (x == 1) {
    if (userInput === userLogin.pass) {
        alert("Okay you can come in.")
        x = 2
    }
    else {
        counter--;
        if (counter === 0) {
            alert("Entry forbidden")
            break
        }
        userInput = window.prompt("I'm sorry " + userLogin.user + ", I can't let you do that.  " +
            "Enter your password again.  Attempts remaining: " + counter);

    }
    }