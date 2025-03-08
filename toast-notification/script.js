"strict";

const container = document.querySelector(".container");
const notificationButton = document.querySelector(".notification-button");

notificationButton.addEventListener("click", () => {
  handleNotification();
  const recentNotification = container.firstChild;

  setTimeout(() => {
    container.removeChild(recentNotification);
  }, 3000);
});

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

function handleNotification(message = "Invalid Data, Try Again") {
  //? Create randomMessage

  const randomMessage = message ?? Math.floor(Math.random() * messages.length);

  //? Create random color
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);

  //? Create elements
  const notificationsContainer = document.createElement("div");
  const p = document.createElement("p");
  p.style.color = `rgb(${R},${G},${B})`;

  //? Add class to the div container
  notificationsContainer.classList.add("notifications-container");

  //? Add text to the p element
  p.textContent = message ?? messages[randomMessage];

  //? Add the elements to the DOM
  container.insertAdjacentElement("afterbegin", notificationsContainer);

  notificationsContainer.append(p);
}
