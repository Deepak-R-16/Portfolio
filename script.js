// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    // Character counter for message textarea
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const remaining = this.value.length;
            charCount.textContent = remaining;
            
            // Change color based on character count
            if (remaining > 450) {
                charCount.style.color = '#ff0000';
            } else if (remaining > 400) {
                charCount.style.color = '#ffaa00';
            } else {
                charCount.style.color = '#ccc';
            }
        });
    }

    // Form submission handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
           //Simulate form submission (replace with actual form handling)
            alert('Thank you for your message! I will get back to you soon.');
            charCount.textContent = '0';
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const link = item.querySelector('.nav-link');
            if (link && link.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Mobile menu toggle (if hamburger menu is implemented)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Add some interactive effects
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Progress bar animation on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
});

// Add some cybersecurity-themed console messages
console.log('%c🔒 Welcome to Deepak R\'s Cybersecurity Portfolio!', 'color: #00ff00; font-size: 20px; font-weight: bold;');
console.log('%c💻 Built with security in mind', 'color: #00ff00; font-size: 14px;');
console.log('%c🚨 Remember: Always practice ethical hacking!', 'color: #ff0000; font-size: 14px;');