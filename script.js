function toggleDropdown(e) {
    e.preventDefault();
    const dropdown = document.getElementById('dropdown');
    const arrow = document.getElementById('arrow');
    dropdown.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
}

// Klik di luar = tutup dropdown
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('dropdown');
    const arrow = document.getElementById('arrow');
    if (!e.target.closest('.relative')) {
        dropdown.classList.add('hidden');
        arrow.classList.remove('rotate-180');
    }
});

const toTopBtn = document.getElementById('toTop');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        toTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        toTopBtn.classList.add('opacity-100', 'translate-y-0');
    } else {
        toTopBtn.classList.remove('opacity-100', 'translate-y-0');
        toTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    }
};

toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
