// ==========================================
// 1. DOM ELEMENTS
// ==========================================

const heading = document.getElementById("heading");
const helloBtn = document.getElementById("helloBtn");
const myWork = document.getElementById("myWork");
const workMessage = document.getElementById("workMessage");
const aboutBtn = document.getElementById("aboutBtn");
const about = document.getElementById("about");
const contactMe = document.getElementById("contactMe");
const budgetInput = document.getElementById("budgetInput");
const budgetBtn = document.getElementById("budgetBtn");
const budgetMessage = document.getElementById("budgetMessage");
const projectDecision = document.getElementById("projectDecision");
const complexityInput = document.getElementById("complexityInput");
const projectsSection = document.getElementById("projects");



// ==========================================
// 2. FUNCTIONS
// ==========================================

function introduceCompany(companyName, service) {
    console.log(
      `Welcome to ${companyName} where we integrate ${service} to help businesses solve real-life problems.`
    );
}

function changeHeading() {
    heading.textContent = "Building Solutions That Matter";
}

function welcomeUser() {
    helloBtn.textContent = "Welcome User!";
}

function sayHello() {
    console.log("Hello Samuel");
}

function changeButtonText(button,message){
    button.textContent = message;
}

function checkBudget(budget){
    if (budget>=1000){
        return "We can move forward with this budget";
    }else{
        return "Client needs a larger budget";
    }
}
const projectGrid = document.getElementById("projectGrid");
const projects = [
    {
        name: "PORTFOLIO WEBSITE",
        description: "My personal software engineering portfolio",
        technology: "HTML, CSS, JavaScript"
    },

    {
        name: "PROJECT EVALUATOR",
        description: "A tool that evaluates projects based on budget and complexity",
        technology: "JavaScript"
    },

    {
        name: "SM SOLUTIONS - official",
        description: "Practical technology solutions for real-world problems ",
        technology: "HTML, CSS, JavaScript"
    },

    {
        name: "SALES DASHBOARD",
        description: "A Power BI dashboard analyzing business sales data",
        technology: "Power BI"
    },

   // {

        //name: "SUPPLY CHAIN AND PROJECT MANAGEMENT",
       // description: "A tool model for quality control, offshoring etc",
        //technology: "to be determined"

   // }

];
for(let i = 0; i < projects.length; i++) {
    const projectName = document.createElement("h3");
    const projectDescription = document.createElement("p");
    const technologyTitle = document.createElement("h4");
    const projectTechnology = document.createElement("p");

    const projectCard = document.createElement("div")
    projectCard.classList.add("project-card");


    projectName.textContent = projects[i].name;
    projectDescription.textContent = projects[i].description;
    technologyTitle.textContent = "Technologies:"
    projectTechnology.textContent = projects[i].technology

    projectCard.appendChild(projectName);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(technologyTitle);
    projectCard.appendChild(projectTechnology);

    projectGrid.appendChild(projectCard);
}



function evaluateProject(budget, complexity) {

    if (budget < 500) {
        return "This project needs a larger budget";

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


// ==========================================
// 3. FUNCTION CALLS
// ==========================================

introduceCompany("SM Solutions", "technical and business ideas");

changeHeading();

sayHello();

helloBtn.addEventListener("click", function(){
changeButtonText(helloBtn, "Welcome User!");
});

myWork.addEventListener("click" , function(){
changeButtonText(myWork, "Projects Loaded!")
});

contactMe.addEventListener("click", function(){
    changeButtonText(contactMe, "YAY!")
});

//console.log (checkBudget(999));
//console.log (checkBudget(1000));





// ==========================================
// 4. EVENT LISTENERS
// ==========================================

// Say Hello button
helloBtn.addEventListener("click", function () {
    welcomeUser();
    helloBtn.style.backgroundColor = "blue";
    helloBtn.style.color = "white";
});


// My Work button
myWork.addEventListener("click", function () {
    myWork.textContent = "Projects Loaded!";
    myWork.classList.add("highlight");
});


// About button

//aboutBtn.addEventListener("click", function () {

    //about.classList.toggle("show");

    //if (about.classList.contains("show")) {
        //aboutBtn.textContent = "Hide About Me";
    //} else {
       // aboutBtn.textContent = "More About Me";
   // }

//});

//CONTACT ME BUTTOPM
contactMe.addEventListener("click", function (){
    contactMe.classList.toggle("show");

    if(contactMe.classList.contains("show")){
        contactMe.textContent = "Yay!";
    }else{
        contactMe.textContent = "Contact Information";
    }
});


//budget button
budgetBtn.addEventListener("click", function() {
console.log("button clicked");
    const budget = Number(budgetInput.value);
    const complexity = complexityInput.value;

    const decision = evaluateProject(budget, complexity);
    console.log(decision);

    projectDecision.textContent = decision;
    

});

myWork.addEventListener("click", function () {
    myWork.textContent = "Projects Loaded!";

    projectsSection.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(function () {
        myWork.textContent = "My Work";
    }, 500);
});
