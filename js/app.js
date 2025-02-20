document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.presentacion__enlaces a').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});
