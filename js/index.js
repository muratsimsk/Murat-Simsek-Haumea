
const today = new Date();
const thisYear = today.getFullYear();

// Select the footer element
const footer = document.querySelector("footer");

// Create a new paragraph element for copyright
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; Murat Simsek ${thisYear}`;
footer.appendChild(copyright);


const mySkills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

// Select the skills section and the ul element inside it
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

// Loop through skills and append each to the list
mySkills.forEach(skill => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
});

// leave message form
const messageForm = document.forms.leave_message;
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = messageForm.usersName.value;
    const email = messageForm.usersEmail.value;
    const message = messageForm.usersMessage.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    messageForm.reset();

    // Display messages in list
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    // new message list item
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>: <span>${message}</span>`;

    // remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";

    // ivent listener to remove button
    removeButton.addEventListener('click', function() {
        newMessage.remove();
    });

    // emove button
    newMessage.appendChild(removeButton);

    // new message to message list
    messageList.appendChild(newMessage);
});

// Fetch GitHub
const projectSection = document.getElementById('Projects');
const projectList = projectSection.querySelector('ul');

fetch('https://api.github.com/users/muratsimsk/repos')
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
            projectLink.href = repo.html_url;
            projectLink.innerText = repo.name;
            projectLink.target = "_blank";
            project.appendChild(projectLink);
            projectList.appendChild(project);
        });
    })
    .catch((error) => {
        const errorElement = document.createElement("p");
        errorElement.innerText = error.message;
        projectSection.appendChild(errorElement);
    });
