"use strict";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  /*
    Without setTimeout(), removing the "fill" class would immediately remove the class, making the element disappear before the drag operation properly starts. So delay is needed to ensure drag is
    activated before the removal of 'fill' class.
    */
  this.classList.add("hold");

  setTimeout(() => {
    this.classList.remove("fill");
    this.classList.remove("hold");
  });
}

function dragEnd() {
  this.classList.add("fill");
}

function dragOver(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragDrop() {
  //   this.classList.add("empty");
  this.classList.remove("hovered");
  this.append(fill);
}

/*
- dragstart → Fires when drag starts
- dragend → Fires when drag ends
- dragover → Fires when the dragged element is over a valid drop target
- dragenter → Fires when the dragged element enters a drop target
- dragleave → Fires when the dragged element leaves a drop target
- drop → Fires when the dragged element is dropped
*/
