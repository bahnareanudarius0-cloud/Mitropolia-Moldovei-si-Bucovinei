// ============================================
// CAROUSEL AUTO-ROTATION
// ============================================
const carouselTexts = [
    "„Jurnalul fericirii materne" – întâlnirea anuală a mamelor din Programul „Praesidio" pentru femeile însărcinate aflate în dificultate",
    "Mitropolia Moldovei și Bucovinei slujește cu devoțiune comunitatea ortodoxă",
    "Suntem aici pentru a sprijini și a ghida pe toți cei care se îndreaptă către noi",
    "Creștinătatea în acțiune: iubire, compasiune și slujire"
];

let currentTextIndex = 0;

function rotateCarouselText() {
    currentTextIndex = (currentTextIndex + 1) % carouselTexts.length;
    const heroText = document.querySelector('.hero-text p');
    
    heroText.style.opacity = '0';
    
    setTimeout(() => {
        heroText.textContent = carouselTexts[currentTextIndex];
        heroText.style.opacity = '1';
    }, 300);
}

// Auto-rotate every 8 seconds
setInterval(rotateCarouselText, 8000);

// ============================================
// CAROUSEL NAVIGATION BUTTONS
// ============================================
document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
    currentTextIndex = (currentTextIndex - 1 + carouselTexts.length) % carouselTexts.length;
    updateCarouselText();
});

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
    currentTextIndex = (currentTextIndex + 1) % carouselTexts.length;
    updateCarouselText();
});

function updateCarouselText() {
    const heroText = document.querySelector('.hero-text p');
    heroText.style.opacity = '0';
    
    setTimeout(() => {
        heroText.textContent = carouselTexts[currentTextIndex];
        heroText.style.opacity = '1';
    }, 300);
}

// Add smooth transition to text change
const heroTextElement = document.querySelector('.hero-text p');
if (heroTextElement) {
    heroTextElement.style.transition = 'opacity 0.3s ease';
}

// ============================================
// SMOOTH SCROLLING NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active link
            updateActiveLink(href);
        }
    });
});

function updateActiveLink(href) {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`a[href="${href}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// ============================================
// UPDATE ACTIVE LINK ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');
        
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            document.querySelectorAll('a[href^="#"]').forEach(link => {
                link.classList.remove('active');
            });
            
            const activeLink = document.querySelector(`a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// ============================================
// CONTACT BUTTON
// ============================================
document.querySelector('.contact-btn').addEventListener('click', () => {
    // Replace with your contact email or phone
    alert('Contact Information:\nEmail: contact@mitropolia.ro\nPhone: +40 (231) XXX-XXXX');
    
    // Or redirect to contact page:
    // window.location.href = '/contact.html';
});

// ============================================
// ADD CSS TRANSITION TO HERO TEXT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text p');
    if (heroText) {
        heroText.style.transition = 'opacity 0.3s ease';
        heroText.style.opacity = '1';
    }
});

console.log('✅ Website JavaScript loaded successfully!');
