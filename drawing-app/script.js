"use strict";

const canvas = document.querySelector("canvas");
const paintbrush = canvas.getContext("2d");
const colorPicker = document.querySelector("input");
const sizeEl = document.getElementById("size");
const clearBtn = document.getElementById("clear");
const toolbox = document.querySelector(".toolbox");

let isPressed = false;
let size = 10;
let color = "black";
let x;
let y;

//? increase and decrease size of paintbrush
toolbox.addEventListener("click", (e) => {
  const increaseBtn = e.target.closest("#increase");
  const decreaseBtn = e.target.closest("#decrease");
  if (!increaseBtn && !decreaseBtn) return;
  if (e.target === increaseBtn && size < 50) size += 5;

  if (e.target === decreaseBtn && size > 5) size -= 5;

  sizeEl.textContent = size;
});

//? Clear canvas
clearBtn.addEventListener("click", () => paintbrush.clearRect(0, 0, 800, 800));

canvas.addEventListener("mousedown", (e) => {
  color = colorPicker.value;
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y);
});

canvas.addEventListener("mousemove", (e) => {
  if (!isPressed) return;
  const x2 = e.offsetX;
  const y2 = e.offsetY;
  drawCircle(x2, y2);
  drawLine(x, y, x2, y2);

  x = x2;
  y = y2;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  //   x = undefined;
  //   y = undefined;
});

function drawCircle(x, y) {
  paintbrush.beginPath();
  paintbrush.arc(x, y, size, 0, Math.PI * 2);
  paintbrush.fillStyle = color;
  paintbrush.fill();
}

function drawLine(x1, y1, x2, y2) {
  paintbrush.beginPath(); // Start a new drawing path
  paintbrush.moveTo(x1, y1); // Move to starting position
  paintbrush.lineTo(x2, y2); // Draw line to end position
  paintbrush.strokeStyle = color; // Set line color
  paintbrush.lineWidth = size * 2;
  paintbrush.stroke(); // Render the line
}
/*
drawCircle() explanation:
	•	x, y → The center of the circle (passed as function parameters).
	•	size → The radius (how big the circle is).
	•	0 → The starting angle (0 radians = rightmost point).
	•	Math.PI * 2 → The ending angle (this completes a full circle).

Think of the arc as drawing part of a circle from one angle to another.

Angle Breakdown:
	•	0 radians → Right side (3 o’clock).
	•	Math.PI / 2 radians → Bottom (6 o’clock).
	•	Math.PI radians → Left side (9 o’clock).
	•	Math.PI * 1.5 radians → Top (12 o’clock).
	•	Math.PI * 2 radians → Completes the full circle.

📌 Math.PI * 2 makes it a full circle!
*/
//======================================================//
/* 
Think of it like drawing with a pen:
	1.	moveTo(x1, y1) → Move the pen to a position.
	2.	lineTo(x2, y2) → Drag the pen to another position.
	3.	stroke() → Actually ink the line.
*/
