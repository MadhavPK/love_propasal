/**
 * @file master_script.js
 * @source https://share.gemini.google/vkzb5rGNb0Rw
 * @date 2026-08-09 18:20:17
 * @author MK and gemini
 * @brief master page for the music throught the experience 
 */

// Listen for a message from the iframe to start the music
// Play background music after user interaction (required by modern browsers)
window.addEventListener('message', function (event) {
    if (event.data === 'playMusic') {
        const bgMusic = document.getElementById('bg-music');
        bgMusic.volume = 0.5;
        bgMusic.play().catch((err) => {
            console.warn('Background music could not autoplay:', err);
        });
    }
});