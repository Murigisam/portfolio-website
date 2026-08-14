//DOM ELEMENTS

const budgetInput = document.getElementById("budgetInput");
const complexityInput = document.getElementById("complexityInput");
const budgetBtn = document.getElementById("budgetBtn");
const projectDecision = document.getElementById("projectDecision");

//function

function evaluateProject(budget, complexity) {

    if (budget < 500) {
        return "The project needs a larger budget";
         projectDecision.classList.add("warning");

    } else if (budget >= 500 && budget <= 999) {
        return "The budget needs further evaluation";

    } else if (budget >= 1000 && complexity === "low") {
        return "The project is ready to move forward";

    } else if (budget >= 1000 && complexity === "medium") {
        return "The project needs further evaluation";

    } else if (budget >= 1000 && complexity === "high") {
        return "The project needs further review";
    }
}

//event listeners

budgetBtn.addEventListener("click", function() {

    console.log("button clicked");

    const budget = Number(budgetInput.value);
    const formattedBudget = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
}).format(budget);
    const complexity = complexityInput.value;

    const decision = evaluateProject(budget, complexity);

projectDecision.innerHTML = `
    <strong>Budget:</strong> ${formattedBudget}<br>
    <strong>Complexity:</strong> ${complexity}<br>
    <strong>Assessment:</strong> ${decision}
`;
projectDecision.classList.remove("ready", "warning", "review");

if (decision === "The project is ready to move forward") {

    projectDecision.classList.add("ready");

} else if (decision === "The project needs a larger budget") {

    projectDecision.classList.add("warning");

} else if (decision === "The budget needs further evaluation") {

    projectDecision.classList.add("warning");

} else if (decision === "The project needs further review") {

    projectDecision.classList.add("review");

}
});