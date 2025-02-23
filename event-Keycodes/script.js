"use strict";

const container = document.querySelector(".container");

const eventKey = document.createElement("div");
const eventKeycode = document.createElement("div");
const Eventcode = document.createElement("div");

const div = document.createElement("div");

(function () {
  div.textContent = "Press any key to get the keyCode";
  container.append(div);
})();

window.addEventListener("keydown", (e) => {
  if (container.contains(div)) container.removeChild(div);

  const { key, code, keyCode } = e;

  eventKey.id = "event-key";
  Eventcode.id = "event-keycode";
  eventKeycode.id = "event-eventcode";

  eventKey.textContent = key;
  Eventcode.textContent = code;
  eventKeycode.textContent = keyCode;

  container.append(eventKey, Eventcode, eventKeycode);
});
