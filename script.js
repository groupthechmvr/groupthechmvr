// Menu Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Mudar header ao rolar
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Botão Voltar ao Topo
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('active', window.scrollY > 300);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Widget de Avaliação
/*
const ratingBtn = document.getElementById('rating-btn');
const ratingModal = document.getElementById('rating-modal');
const ratingStars = document.querySelectorAll('.rating-star');
const ratingSubmit = document.getElementById('rating-submit');
let selectedRating = 0;

ratingBtn.addEventListener('click', () => {
    ratingModal.classList.toggle('active');
});

ratingStars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        selectedRating = rating;
        
        ratingStars.forEach((s, index) => {
            if (index < rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});


ratingSubmit.addEventListener('click', () => {
    if (selectedRating > 0) {
        alert(`Obrigado por sua avaliação de ${selectedRating} estrela(s)!`);
        ratingModal.classList.remove('active');
        
        // Reset stars
        ratingStars.forEach(star => {
            star.classList.remove('active');
        });
        selectedRating = 0;
    } else {
        alert('Por favor, selecione uma avaliação antes de enviar.');
    }
});

// Fechar modal ao clicar fora
document.addEventListener('click', (e) => {
    if (!ratingModal.contains(e.target) && e.target !== ratingBtn) {
        ratingModal.classList.remove('active');
    }
});
*/

// Carrossel de Depoimentos
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

// Animação ao Rolar
const animateElements = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animateOnScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
    
    animateElements.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        }
    });
}

// Verifica se há elementos para animar ao carregar a página
if (animateElements.length) {
    window.addEventListener('scroll', () => {
        animateOnScroll();
    });
    
    // Dispara uma vez ao carregar a página
    animateOnScroll();
}

// Formulário de Contato
//const contactForm = document.getElementById('contact-form');
    
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulação de envio
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    contactForm.reset();
});

// Efeito Slow Motion ao Rolar
document.querySelectorAll('section').forEach(section => {
    section.style.transition = 'all 0.6s ease-out';
});

let lastScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    lastScrollPosition = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = lastScrollPosition + (window.innerHeight / 3);
                
                if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const distance = scrollPosition - sectionTop;
                    const speed = distance / sectionHeight;
                    section.style.transform = `translateY(${speed * 20}px)`;
                } else {
                    section.style.transform = 'translateY(0)';
                }
            });
            ticking = false;
        });
        ticking = true;
    }
});