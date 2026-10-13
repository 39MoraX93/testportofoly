/* ==========================================
   JAVASCRIPT INTERAKTIVITAS WEBSITE
   ========================================== */

// 1. Mobile Menu Toggle (Buka/Tutup menu di HP)
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Tutup menu otomatis ketika salah satu link diklik di HP
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 2. Efek Navbar Berubah saat di-scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md', 'bg-slate-900/95');
    } else {
        navbar.classList.remove('shadow-md', 'bg-slate-900/95');
    }
});

// 3. Efek Mengetik Otomatis (Typing Effect) di Bagian Hero
const words = ["Web Developer", "UI/UX Enthusiast", "Frontend Coder"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typed-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typed-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500);
            return;
        }
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}

// Jalankan efek mengetik saat halaman dimuat
typingEffect();

// 4. Simulasi Pengiriman Formulir Kontak
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman reload default

    const name = document.getElementById('name').value;
    
    // Tampilkan pesan sukses sementara
    formStatus.classList.remove('hidden', 'text-red-400');
    formStatus.classList.add('text-green-400');
    formStatus.textContent = `Terima kasih, ${name}! Pesan Anda berhasil dikirim.`;

    // Reset formulir
    contactForm.reset();

    // Sembunyikan pesan setelah 5 detik
    setTimeout(() => {
        formStatus.classList.add('hidden');
    }, 5000);
});