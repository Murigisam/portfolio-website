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

//console.log (checkBudget(1500));
function evaluateBudget(clientName, budget, problem) {
    if (budget < 500) {
        return "This project needs a larger budget";

    } else if (budget <= 999) {
        return "This budget needs further evaluation";

    } else {
        return "This project is ready to move forward";
    }
}

console.log(evaluateBudget(50));
console.log(evaluateBudget(50000));
console.log(evaluateBudget(999));


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
    workMessage.textContent = "Hope you enjoy checking out my work";
});


// About button
aboutBtn.addEventListener("click", function () {
    about.classList.toggle("show");

    if (about.classList.contains("show")) {
        aboutBtn.textContent = "Hide About Me";
    } else {
        aboutBtn.textContent = "More About Me";
    }
});

//CONTACT ME BUTTOPM
contactMe.addEventListener("click", function (){
    contactMe.classList.toggle("show");

    if(contactMe.classList.contains("show")){
        contactMe.textContent = "Yay!";
    }else{
        contactMe.textContent = "Contact Information";
    }
});

budgetBtn.addEventListener("click", function() {
const budget = Number(budgetInput.value);

budgetMessage.textContent = checkBudget(budget);
});
