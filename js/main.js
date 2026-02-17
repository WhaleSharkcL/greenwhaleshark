document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const modal = document.getElementById('modal');
    const modalClose = document.querySelector('.modal-close');
    const bookingForm = document.getElementById('booking-form');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(bookingForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Form submitted:', data);

        modal.classList.add('active');

        bookingForm.reset();
    });

    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});
