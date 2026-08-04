function introduceCompany(companyName, service){
    console.log(`Welcome, to ${companyName} where we integrate ${service} to help businesses solve real-life problems.`);
}

introduceCompany("SM solutions"," technical and business ideas");

const helloBtn = document.getElementById("helloBtn");
const myWork = document.querySelector("#myWork");

console.log(myWork);

console.log(helloBtn);

helloBtn.addEventListener("click", function () {
    console.log("The button was clicked!");
});

myWork.addEventListener("click", function() {
    console.log("welcome to my projects!");
});