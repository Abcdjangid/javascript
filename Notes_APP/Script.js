const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Retrieve saved notes from localStorage and display them
window.addEventListener("load", () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(note => createNote(note.content, note.id));
});

// Function to create a note
function createNote(content = "Write your Note 😊😊", id = Date.now()) {
    let inputBox = document.createElement("div");
    inputBox.className = "input-box";
    inputBox.innerHTML = content;
    inputBox.setAttribute("contenteditable", "true");
    inputBox.dataset.id = id; // Unique ID for each note

    let img = document.createElement("img");
    img.src = "Asset/trash.png";
    img.className = "trash-icon";

    let noteWrapper = document.createElement("div");
    noteWrapper.className = "note-wrapper";

    noteWrapper.appendChild(inputBox);
    noteWrapper.appendChild(img);
    notescontainer.appendChild(noteWrapper);

    // Save note content when it's edited
    inputBox.addEventListener("input", function() {
        updateLocalStorage();
    });

    // Delete note on trash icon click
    img.addEventListener("click", function () {
        notescontainer.removeChild(noteWrapper);
        updateLocalStorage();
    });

    // Save the note when created
    updateLocalStorage();
}

// Add new note on button click
createBtn.addEventListener("click", () => {
    createNote();
});

// Function to update localStorage with the current state of notes
function updateLocalStorage() {
    let notes = document.querySelectorAll(".input-box");
    let notesArray = [];

    notes.forEach(note => {
        notesArray.push({
            content: note.innerHTML,
            id: note.dataset.id
        });
    });

    localStorage.setItem("notes", JSON.stringify(notesArray));
}
