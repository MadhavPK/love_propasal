/**
 * @file script.js
 * @source https://chatgpt.com/share/69b6d72e-d6f4-8007-8cd1-e9072f68c410
 * @date 2026-03-24 21:33:16
 * @author ChatGPT and Me
 * @brief A romantic webpage to propose to the love of my life
 */

const envelope = document.getElementById("envelope");
const letterText = document.getElementById("letterText");

const message = "I made something for you... ❤️";

let index = 0;

function typeLetter() {
  if (index < message.length) {
    letterText.textContent += message.charAt(index);
    index++;
    setTimeout(typeLetter, 60);
  }
}

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    typeLetter();
  }, 800);

  // Redirect after animation
  setTimeout(() => {
    window.location.href = "./game/game_index.html"; // redirect to game page
  }, 4000);
});