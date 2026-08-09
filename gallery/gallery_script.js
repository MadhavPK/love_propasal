/**
 * @file gallery_script.js
 * @source https://share.gemini.google/BHxKMA37f9v7
 * @date 2026-08-09 22:03:46
 */

// Automatically duplicate the photo sets to create a seamless infinite scroll
// Wait until all images are fully loaded so the heights are calculated perfectly
window.addEventListener("load", () => {
    const tracks = document.querySelectorAll('.scroll-track');

    tracks.forEach(track => {
        // Find the original set of photos in this column
        const originalSet = track.querySelector('.photo-set');

        // Clone it completely
        const cloneSet = originalSet.cloneNode(true);

        // Append the clone directly under the original
        track.appendChild(cloneSet);
    });
});