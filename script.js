function showPage(pageId) {
    // Esconde todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Mostra a página selecionada
    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block';
}

// Mostra a página inicial
document.addEventListener('DOMContentLoaded', function() {
    showPage('historia');
});
