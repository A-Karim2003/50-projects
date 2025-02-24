const tagsEl = document.getElementById("tags");
const textarea = document.querySelector("textarea");
textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    e.target.value = "";
    selectRandom();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((text) => text.trim() !== "")
    .map((text) => text.trim());

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;
    tagsEl.append(tagEl);
  });
}

function selectRandom() {
  const times = 3000; //* This is in ms

  //? Each interval, a tags highlight gets toggled
  const interval = setInterval(() => {
    //? every 100ms a random tag gets highlighted
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    //? after 100ms a random tag gets un-highlighted

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  //* After 3 second, select the chosen one :)
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      highlightTag(pickRandomTag());
    }, 100);
  }, times);
}

function pickRandomTag() {
  const tags = tagsEl.querySelectorAll(".tag");
  const randomTag = Math.floor(Math.random() * tags.length);
  return tags[randomTag];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
