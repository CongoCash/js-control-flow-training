console.log("security_questions.js loaded");

let securityQuestions = [{question:"how old are you?", expectedAnswer:"50"},
    {question:"How many circles in a square?", expectedAnswer:"3"},
    {question:"Say my name", expectedAnswer:"david"}]

for (let i = 0; i<securityQuestions.length; i++) {
    let userAnswer = window.prompt(securityQuestions[i].question)
    if (userAnswer !== securityQuestions[i].expectedAnswer) {
        alert("Access DENIED!")
        break
    }
}