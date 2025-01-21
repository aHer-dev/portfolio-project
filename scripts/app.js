const projects = ["Projekt1", "Projekt 2", "Projekt 3"]
const projectlist = document.getElementById("project-list");

projects.forEach((project) => {
    const li =document.createElement("li");
    li.textContent = project;
    projectlist.appendChild(li)
});

const form = document.getElementById("contact-form");
const output = document.getElementById("form-output");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    output.textContent = `Danke, ${name}. Deine Nachricht: "${message}" wurde gesendet.`;
});