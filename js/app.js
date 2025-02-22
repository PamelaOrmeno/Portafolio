document.addEventListener("DOMContentLoaded", () => {
    // Añade target="_blank" a los enlaces externos
    document.querySelectorAll('.presentacion__enlaces a').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Botón de "volver arriba"
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px 15px';
    scrollToTopButton.style.backgroundColor = 'var(--color-terciario)';
    scrollToTopButton.style.color = 'var(--color-primario)';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '50%';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.display = 'none';
    scrollToTopButton.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});