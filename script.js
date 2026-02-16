const btn = document.getElementById('menuBtn');
const overlay = document.getElementById('menuOverlay');

function showPage(pageId) {
    // 1. Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 2. Seleccionar todas las secciones
    const sections = document.querySelectorAll('.page-content');
    
    // 3. Quitar clase active y ocultar
    sections.forEach(sec => {
        sec.classList.remove('active');
        sec.style.display = 'none';
    });

    // 4. Mostrar la sección seleccionada
    const target = document.getElementById('section-' + pageId);
    if (target) {
        target.style.display = 'block';
        // Delay mínimo para que el navegador registre el display:block antes de animar
        setTimeout(() => {
            target.classList.add('active');
        }, 50);
    }
}

// Evento para el menú hamburguesa (si lo usas)
if(btn) {
    btn.addEventListener('click', () => {
        overlay.classList.toggle('active');
    });
}