// Basic interactions for the portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Reveal effects on scroll
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
                    toggleMenu();
                }

                window.scrollTo({
                    top: target.offsetTop - 80, // Header offset
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Logic
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        if (isOpen) {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        } else {
            mobileMenu.classList.remove('translate-x-full');
            document.body.classList.add('overflow-hidden');
        }
    };

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }

    // FAQ Accordion with Accessibility
    const faqItems = document.querySelectorAll('[data-faq-item]');

    faqItems.forEach((item, index) => {
        const content = item.querySelector('div:last-child');
        const icon = item.querySelector('span[aria-hidden]');

        // Keep first item open by default (already set in HTML)
        if (index !== 0) {
            content.classList.add('hidden');
        }

        const toggleFAQ = () => {
            const isExpanded = item.getAttribute('aria-expanded') === 'true';

            // Close item
            if (isExpanded) {
                item.setAttribute('aria-expanded', 'false');
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
                item.classList.remove('border-accent/40');
                item.classList.add('border-slate-800');
            }
            // Open item
            else {
                item.setAttribute('aria-expanded', 'true');
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
                item.classList.remove('border-slate-800');
                item.classList.add('border-accent/40');
            }
        };

        // Click handler
        item.addEventListener('click', toggleFAQ);

        // Keyboard handler (Enter and Space)
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ();
            }
        });
    });

    // Professional form submission handler
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalBtnText = btn.innerText;

            btn.disabled = true;
            btn.innerText = 'Enviando...';

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            formStatus.innerText = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
            formStatus.className = 'block text-center p-4 rounded-lg font-medium bg-emerald-500/10 text-emerald-400 mt-4';
            formStatus.classList.remove('hidden');

            contactForm.reset();
            btn.disabled = false;
            btn.innerText = originalBtnText;

            setTimeout(() => {
                formStatus.classList.add('hidden');
            }, 5000);
        });
    }

    // WhatsApp Event Tracking
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function () {
            if (typeof gtag === 'function') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'Conversion',
                    'event_label': 'WhatsApp Button',
                    'button_location': this.innerText.trim() || 'Floating Button'
                });
            }
        });
    });
});
