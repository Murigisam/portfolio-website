console.log("Portfolio JavaScript loaded");


// ==========================================
// DOM ELEMENTS
// ==========================================

const myWork = document.getElementById("myWork");
const helloBtn = document.getElementById("helloBtn");
const contactMe = document.getElementById("contactMe");

const projectsSection = document.getElementById("projects");
const projectGrid = document.getElementById("projectGrid");


// ==========================================
// PROJECT DATA
// ==========================================

const projects = [
    {
        name: "PORTFOLIO WEBSITE",
        description:
            "My personal software engineering portfolio.",
        technology:
            "HTML, CSS, JavaScript",
        link:
            "#"
    },

    {
        name: "PROJECT EVALUATOR",
        description:
            "A tool that evaluates projects based on budget, complexity, risk, and timeline. With Agentic Engineering intergration for decision making, consulting and application",
        technology:
            "HTML, CSS, JavaScript,AI",
        link:
            "project-evaluator.html"
    },

    {
        name: "SM CONSULTING",
        description:
            "Official webpage for SMC. Helping businesses find quality technology solutions.",
        technology:
            "HTML, CSS, JavaScript",
        link:
            "#"
    },

    {
        name: "SALES DASHBOARD",
        description:
            "A Power BI dashboard analyzing business sales data.",
        technology:
            "Power BI",
        link:
            "#"
    },

    {
        name: "PROJECT LIFE",
        description:
            "YOUR LIFE IS THE MAIN QUEST.THIS IS EVERYTHING ELSE. FUCK IT. WHY NOT?",
        technology:
            "HTML, CSS, JavaScript,AI",
        link:
            "project-Life.html"
    },

     {
        name: "SALON WEBPAGE AND APP",
        description:
            "WORKING PROGRESS",
        technology:
            "HTML, CSS, JavaScript,AI",
        link:
            "project-Life.html"
    }



];


// ==========================================
// CREATE PROJECT CARD
// ==========================================

function createProjectCard(project) {

    const card = document.createElement("article");
    card.classList.add("project-card");


    const name = document.createElement("h3");
    name.textContent = project.name;


    const description = document.createElement("p");
    description.textContent = project.description;


    const technologyTitle = document.createElement("h4");
    technologyTitle.textContent = "Technologies";


    const technology = document.createElement("p");
    technology.textContent = project.technology;


    const projectLink = document.createElement("a");

    projectLink.classList.add("project-link");

    projectLink.textContent = "View Project →";

    projectLink.href = project.link;


    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(technologyTitle);
    card.appendChild(technology);
    card.appendChild(projectLink);


    return card;
}


// ==========================================
// RENDER PROJECTS
// ==========================================

function renderProjects() {

    projectGrid.innerHTML = "";

    projects.forEach(function(project) {

        const card = createProjectCard(project);

        projectGrid.appendChild(card);

    });
}


// ==========================================
// MY WORK BUTTON
// ==========================================

function handleMyWorkClick() {

    myWork.textContent = "Projects Loaded!";

    myWork.classList.add("highlight");


    projectsSection.scrollIntoView({
        behavior: "smooth"
    });


    setTimeout(function() {

        myWork.textContent = "View My Work";

        myWork.classList.remove("highlight");

    }, 800);
}


// ==========================================
// CONTACT BUTTONS
// ==========================================

function openContactPage() {

    window.location.href = "contact.html";

}


// ==========================================
// EVENT LISTENERS
// ==========================================

myWork.addEventListener(
    "click",
    handleMyWorkClick
);


helloBtn.addEventListener(
    "click",
    openContactPage
);


contactMe.addEventListener(
    "click",
    openContactPage
);


// ==========================================
// INITIALIZE
// ==========================================

renderProjects();