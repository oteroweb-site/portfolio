// Basic interactions for the portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Reveal effects on scroll
    // Reveal effects using IntersectionObserver (Performance Optimized)
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Reduce load by unobserving after reveal
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(element => revealObserver.observe(element));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Header offset
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion with Accessibility - Robust Implementation
    const faqItems = document.querySelectorAll('[data-faq-item]');

    faqItems.forEach((item) => {
        const header = item.querySelector('button'); // Assuming the header is a button or clickable area
        const content = item.querySelector('.faq-content'); // We need to add this class in HTML or select div:last-child
        const icon = item.querySelector('svg'); // Assuming SVG icon

        // If structure differs, adjust selectors:
        // Current structure based on common patterns: div > div(header) + div(content)
        // Let's use the layout from previous view_file (implied):
        // Item -> div.trigger -> div.content

        const trigger = item.children[0];
        const answer = item.children[1];
        const arrow = trigger.querySelector('svg'); // Or span with rotate class

        // Initialize state
        const isOpen = item.getAttribute('aria-expanded') === 'true';
        if (!isOpen) {
            answer.classList.add('hidden');
        } else {
            arrow?.classList.add('rotate-180');
            item.classList.add('border-accent/40');
        }

        trigger.addEventListener('click', () => {
            const isCurrentlyOpen = item.getAttribute('aria-expanded') === 'true';

            // Close all others (Accordion behavior)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.setAttribute('aria-expanded', 'false');
                    otherItem.children[1].classList.add('hidden');
                    otherItem.children[0].querySelector('svg')?.classList.remove('rotate-180');
                    otherItem.classList.remove('border-accent/40');
                    otherItem.classList.add('border-slate-800');
                }
            });

            // Toggle current
            if (isCurrentlyOpen) {
                // Close
                item.setAttribute('aria-expanded', 'false');
                answer.classList.add('hidden');
                arrow?.classList.remove('rotate-180');
                item.classList.remove('border-accent/40');
                item.classList.add('border-slate-800');
            } else {
                // Open
                item.setAttribute('aria-expanded', 'true');
                answer.classList.remove('hidden');
                arrow?.classList.add('rotate-180');
                item.classList.remove('border-slate-800');
                item.classList.add('border-accent/40');
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

    // --- NEW: Scroll Portfolio to Second Card on Load ---
    const portfolioCarousel = document.getElementById('portfolio-carousel');

    function scrollToSecondCard() {
        if (portfolioCarousel && portfolioCarousel.children.length > 1) {
            const secondCard = portfolioCarousel.children[1];
            if (secondCard) {
                const cardLeft = secondCard.offsetLeft;
                const cardWidth = secondCard.offsetWidth;
                const containerWidth = portfolioCarousel.offsetWidth;

                // Calculate the scroll position to center the card
                const scrollPos = cardLeft - (containerWidth / 2) + (cardWidth / 2);

                portfolioCarousel.scrollLeft = scrollPos;
            }
        }
    }

    // Run when the page is fully loaded to ensure correct dimensions
    if (document.readyState === 'complete') {
        scrollToSecondCard();
    } else {
        window.addEventListener('load', scrollToSecondCard);
        // Fallback: try after a short delay just in case
        setTimeout(scrollToSecondCard, 200);
    }
});
