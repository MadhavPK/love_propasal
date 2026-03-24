/**
 * @file challenge_script.js
 * @source https://chatgpt.com/share/69b6d72e-d6f4-8007-8cd1-e9072f68c410
 * @date 2026-03-19 16:05:32
 */

const heartsContainer = document.getElementById("hearts");
const typewriter = document.getElementById("typewriter");
const noteBtn = document.getElementById("noteBtn");
const noteMessage = document.getElementById("noteMessage");
const beginBtn = document.getElementById("beginBtn");

const text = "I made this just for you ❤️";
let index = 0;

function typeText() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index += 1;
    setTimeout(typeText, 70);
  }
}

setTimeout(typeText, 1500);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 22 + 14 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heart.style.opacity = Math.random() * 0.5 + 0.4;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 380);

noteBtn.addEventListener("click", () => {
  noteMessage.classList.toggle("show");
  noteBtn.textContent = noteMessage.classList.contains("show")
    ? "Hide the note"
    : "Open a small note";
});

beginBtn.addEventListener("click", () => {
  beginBtn.textContent = "Your story starts here";
});