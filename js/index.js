
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


//.........assignment 14


// Select the message form
const messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
   
    const name = messageForm.usersName.value;
    const email = messageForm.usersEmail.value;
    const message = messageForm.usersMessage.value;
    
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    
    messageForm.reset(); //this clear the form after subm
    
    // Display messages in list
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    
    // Create new message list item
    const newMessage = document.createElement('li');
    
    // Set inner HTML of new message item
    newMessage.innerHTML = 
    `
        <a href="mailto:${email}">${name}</a>: 
        <span>${message}</span>`
    ;
    
    // For creating a remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";
    
    //remove fu
    removeButton.addEventListener('click', function() {
        
        newMessage.remove();
    });
    
    // Append remove button to new message item
    newMessage.appendChild(removeButton);
    
    // Append new message to message list
    messageList.appendChild(newMessage);
});


///for assignment 15 fetch the github
const projectSection = document.getElementById('Projects');
const projectList = projectSection.querySelector('ul');

fetch(`https://api.github.com/users/muratsimsk/repos`)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong 😢");
    }
    return res.json();
  })
  .then((data) => {
    data.forEach(repo => {
      const project = document.createElement("li");
      const projectLink = document.createElement("a");
      projectLink.href = repo.html_url; // Link to the repository
      projectLink.innerText = repo.name; // Repository name as link text
      projectLink.target = "_blank"; // Open in a new tab
      project.appendChild(projectLink);
      projectList.appendChild(project);
    });
  })
  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    projectSection.appendChild(errorElement);
  });
  