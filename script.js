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

// Game Logic
let score = 0;
let gameInterval;
let gameActive = false;

function startGame() {
  showScreen('screen-game');
  score = 0;
  document.getElementById('score').innerText = score;
  gameActive = true;
  document.getElementById('game-area').innerHTML = '';

  // Spawn a heart every 600ms
  gameInterval = setInterval(spawnHeart, 600);
}

function spawnHeart() {
  if (!gameActive) return;

  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.classList.add('falling-heart');

  // Random horizontal position
  const randomX = Math.random() * (window.innerWidth - 50);
  heart.style.left = `${randomX}px`;
  heart.style.top = '-50px';

  document.getElementById('game-area').appendChild(heart);

  // Animate falling
  let posY = -50;
  let speed = 3 + Math.random() * 3; // Random falling speed

  const fall = setInterval(() => {
    if (!gameActive) {
      clearInterval(fall);
      return;
    }
    posY += speed;
    heart.style.top = `${posY}px`;

    // Remove heart if it falls off screen
    if (posY > window.innerHeight) {
      clearInterval(fall);
      heart.remove();
    }
  }, 20);

  // Click to catch heart
  heart.onmousedown = () => catchHeart(heart, fall);
  // Support for mobile touch
  heart.ontouchstart = (e) => {
    e.preventDefault();
    catchHeart(heart, fall);
  };
}

function catchHeart(heartElement, fallInterval) {
  clearInterval(fallInterval);
  heartElement.remove();
  score++;
  document.getElementById('score').innerText = score;

  if (score >= 10) {
    gameActive = false;
    clearInterval(gameInterval);
    setTimeout(() => {
      showScreen('screen-proposal');
    }, 500);
  }
}

// Escaping NO Button Logic
const noBtn = document.getElementById('btn-no');

function moveNoButton() {
  // Get viewport dimensions
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  // Calculate random positions
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'fixed';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Mouse hover for desktop
noBtn.addEventListener('mouseover', moveNoButton);
// Touch start for mobile
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
});

// Celebration Effects
function startCelebration() {
  const emojis = ['❤️', '🎉', '💍', '✨', '💖'];
  const container = document.getElementById('screen-celebration');

  setInterval(() => {
    const floating = document.createElement('div');
    floating.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    floating.classList.add('floating-emoji');
    floating.style.left = Math.random() * 100 + 'vw';
    container.appendChild(floating);

    // Cleanup DOM
    setTimeout(() => {
      floating.remove();
    }, 3000);
  }, 300);
}