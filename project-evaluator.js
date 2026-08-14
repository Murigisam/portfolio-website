//DOM ELEMENTS

const budgetInput = document.getElementById("budgetInput");
const complexityInput = document.getElementById("complexityInput");
const budgetBtn = document.getElementById("budgetBtn");
const projectDecision = document.getElementById("projectDecision");

//function

function evaluateProject(budget, complexity) {

    if (budget < 500) {
        return "This project needs a larger budget";
         projectDecision.classList.add("warning");

    } else if (budget >= 500 && budget <= 999) {
        return "This budget needs further evaluation";

    } else if (budget >= 1000 && complexity === "low") {
        return "This project is ready to move forward";

    } else if (budget >= 1000 && complexity === "medium") {
        return "This project needs further evaluation";

    } else if (budget >= 1000 && complexity === "high") {
        return "This project needs further review";
    }
}

//event listeners

budgetBtn.addEventListener("click", function() {

    console.log("button clicked");

    const budget = Number(budgetInput.value);
    const complexity = complexityInput.value;

    const decision = evaluateProject(budget, complexity);

projectDecision.textContent = decision;

projectDecision.classList.remove("ready", "warning", "review");

if (decision === "This project is ready to move forward") {

    projectDecision.classList.add("ready");

} else if (decision === "This budget needs further evaluation") {

    projectDecision.classList.add("warning");

} else if (decision === "This project needs further evaluation") {

    projectDecision.classList.add("warning");

} else if (decision === "This project needs further review") {

    projectDecision.classList.add("review");

}
});