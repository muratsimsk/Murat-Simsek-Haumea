
const today = new Date();
const thisYear = today.getFullYear();


const footer = document.querySelector("footer"); // Select the footer element


const copyright = document.createElement("p");  //new paragrap element

copyright.innerHTML = `&copy; Murat Simsek ${thisYear}`;


footer.appendChild(copyright);




//arra
const mySkills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];


const skillsSection = document.getElementById("Skills"); //to select skill section


const skillsList = skillsSection.querySelector("ul");// Select the ul element inside the skills section

// Loop //notes to me<practice again>//
mySkills.forEach(skill => {
   
    const skillItem = document.createElement("li");
    
    skillItem.textContent = skill;
   
    skillsList.appendChild(skillItem);
});


//..........