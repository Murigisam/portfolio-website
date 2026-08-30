// =========================
// DOM ELEMENTS
// =========================

const budgetInput = document.getElementById("budgetInput");
const complexityInput = document.getElementById("complexityInput");
const riskInput = document.getElementById("riskInput");
const projectDescription = document.getElementById("projectDescription");

const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");

const budgetBtn = document.getElementById("budgetBtn");
const projectDecision = document.getElementById("projectDecision");


// =========================
// PROJECT DATA
// =========================

function getProjectFromForm() {

    const budget = Number(budgetInput.value);
    const complexity = complexityInput.value;
    const risk = riskInput.value;
    const description = projectDescription.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const duration =
        (end - start) / (1000 * 60 * 60 * 24);

    return {
        description: description,
        budget: budget,
        complexity: complexity,
        risk: risk,

        timeline: {
            startDate: startDate,
            endDate: endDate,
            duration: duration
        }
    };
}


// =========================
// PROJECT EVALUATION
// =========================

function evaluateProject(project) {

    const reasons = [];

    // Risk analysis

    if (project.risk === "high") {
        reasons.push(
            "High project risk."
        );
    }


    // Budget analysis

    if (project.budget < 500) {

        reasons.push(
            "The proposed budget may be insufficient for this project."
        );

    } else if (
        project.budget >= 500 &&
        project.budget <= 999
    ) {

        reasons.push(
            "The proposed budget falls within a range that requires additional evaluation."
        );
    }


    // Complexity analysis

    if (project.complexity === "medium") {

        reasons.push(
            "The project has moderate complexity and may require additional planning."
        );

    } else if (project.complexity === "high") {

        reasons.push(
            "The project has high complexity and may require additional resources or planning."
        );
    }


    // Determine decision

    let decision = "Ready";

    if (reasons.length > 0) {
        decision = "Review";
    }

    if (project.risk === "high") {
        decision = "Warning";
    }


    // Recommendation

    let recommendation =
        "The project can move forward with normal monitoring.";

    if (decision === "Review") {

        recommendation =
            "Review the identified project factors before proceeding.";
    }

    if (decision === "Warning") {

        recommendation =
            "Conduct a detailed risk assessment before moving forward.";
    }


    return {
        decision: decision,
        reasons: reasons,
        recommendation: recommendation
    };
}


// =========================
// DISPLAY RESULTS
// =========================

function displayDecision(project, decision) {

    const formattedBudget =
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(project.budget);

    const complexityDisplay =
        project.complexity.charAt(0).toUpperCase() +
        project.complexity.slice(1);


    let reasonsHTML = "";

    decision.reasons.forEach(function(reason) {

        reasonsHTML += `<li>${reason}</li>`;

    });


    projectDecision.innerHTML = `

        <strong>Project:</strong>
        ${project.description}
        <br><br>

        <strong>Budget:</strong>
        ${formattedBudget}
        <br>

        <strong>Complexity:</strong>
        ${complexityDisplay}
        <br>

        <strong>Risk:</strong>
        ${project.risk}
        <br>

        <strong>Duration:</strong>
        ${project.timeline.duration} days
        <br><br>

        <strong>Assessment:</strong>
        ${decision.decision}
        <br><br>

        <strong>Reasons:</strong>

        <ul>
            ${reasonsHTML}
        </ul>

        <strong>Recommendation:</strong>
        ${decision.recommendation}

    `;


    // Reset previous decision styles

    projectDecision.classList.remove(
        "ready",
        "warning",
        "review"
    );


    // Apply current decision style

    if (decision.decision === "Ready") {

        projectDecision.classList.add("ready");

    } else if (decision.decision === "Warning") {

        projectDecision.classList.add("warning");

    } else if (decision.decision === "Review") {

        projectDecision.classList.add("review");
    }
}


// =========================
// EVENT LISTENER
// =========================

budgetBtn.addEventListener("click", function() {

    const project = getProjectFromForm();

    console.log("PROJECT OBJECT:", project);

    const decision = evaluateProject(project);

    console.log("DECISION:", decision);

    displayDecision(project, decision);

});