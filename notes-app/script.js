"use strict";
const addBtn = document.getElementById("add");

//? Get the notes from localStorage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  console.log(notes);
  notes.forEach((note) => {
    addNewNote(note);
  });
}

//? Adds note
addBtn.addEventListener("click", () => addNewNote());

//? Deletes note
document.body.addEventListener("click", (e) => {
  //? Find the closest delete button
  const deleteBtn = e.target.closest(".delete");
  if (!deleteBtn) return;
  const note = deleteBtn.closest(".note");
  note.remove();
  localStorage.removeItem("notes");
});

function addNewNote(text = "") {
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("note");

  const noteHTML = `
   <div class="tools">
        <button class="edit">
           <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas far fa-trash-alt"></i>
        </button>
    </div>

      <!-- Try removing the text logic -->

    <div class="main ${text ? "" : "hidden"}"></div> 
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;
  noteContainer.insertAdjacentHTML("beforeend", noteHTML);
  document.body.append(noteContainer);

  const editBtn = noteContainer.querySelector(".edit");
  const main = noteContainer.querySelector(".main");
  const textarea = noteContainer.querySelector("textarea");

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
    const value = textarea.value;

    main.textContent = " ";
    main.insertAdjacentHTML("beforeend", marked.parse(value));
    updateLocalStorage();
  });

  textarea.value = text;
  main.insertAdjacentHTML("beforeend", marked.parse(text));
}

function updateLocalStorage() {
  const noteText = document.querySelectorAll("textarea");
  console.log(noteText);

  const notes = [];

  noteText.forEach((note) => notes.push(note.value));
  console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes));
}
