/**
 * @file script.js
 * @source https://chatgpt.com/share/69b6d72e-d6f4-8007-8cd1-e9072f68c410
 * @date 2026-03-24 21:33:16
 * @author ChatGPT and Me
 * @brief A romantic webpage to propose to the love of my life
 */

// Screen Navigation
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}