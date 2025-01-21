// Projekte dynamisch zur Liste hinzufügen
const projects = ["Portfolio-Seite", "Taschenrechner", "Quiz-Spiel"];
const projectlist = document.getElementById("project-list");

projects.forEach((project) => {
    const li = document.createElement("li"); // Erstellt ein neues Listen-Element
    li.textContent = project; // Fügt den Projektnamen als Text hinzu
    projectlist.appendChild(li); // Fügt das Listen-Element zur Liste hinzu
});

// Formular-Interaktivität
const form = document.getElementById("contact-form"); // Ruft das Formular-Element ab
const output = document.getElementById("form-output"); // Ruft das Ausgabe-Element ab

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite
    const name = document.getElementById("name").value; // Holt den Namen aus dem Formular
    const message = document.getElementById("message").value; // Holt die Nachricht aus dem Formular
    output.textContent = `Danke, ${name}. Deine Nachricht: "${message}" wurde gesendet.`; // Zeigt die Nachricht an
    form.reset(); // Setzt das Formular zurück
});