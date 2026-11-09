const footerContent = `Developed by <a href="https://www.youtube.com/@ngtrduongDev" target="_blank" style="color: #00ff66;">NTDDEV</a> - Last Update: 2026.11.9`;

document.addEventListener("DOMContentLoaded", function() {
    const footerElement = document.getElementById("footer-placeholder");
    if (footerElement) {
        footerElement.innerHTML = footerContent;
    }
});