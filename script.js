// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Collection item hover effect enhancement
const collectionItems = document.querySelectorAll('.collection-item');
collectionItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
    });
});

// Form validation for contact section
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real application, you would send the form data to a server here
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add animation for elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
};

// Add animate-on-scroll class to elements you want to animate
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to certain elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const sectionHeaders = document.querySelectorAll('.section-header');
    const collectionItems = document.querySelectorAll('.collection-item');
    const aboutContent = document.querySelector('.about-content');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (heroTitle) heroTitle.classList.add('animate-on-scroll');
    if (heroSubtitle) heroSubtitle.classList.add('animate-on-scroll');
    
    sectionHeaders.forEach(header => {
        header.classList.add('animate-on-scroll');
    });
    
    collectionItems.forEach(item => {
        item.classList.add('animate-on-scroll');
    });
    
    if (aboutContent) aboutContent.classList.add('animate-on-scroll');
    
    testimonialCards.forEach(card => {
        card.classList.add('animate-on-scroll');
    });
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on load
    animateOnScroll();
});

// Simple fade-in animation
const style = document.createElement('style');
style.innerHTML = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero-content .animate-on-scroll {
        transition-delay: 0.2s;
    }
    
    .hero-buttons .animate-on-scroll {
        transition-delay: 0.4s;
    }
`;
document.head.appendChild(style);

// Mobile menu toggle
const createMobileMenu = function() {
    const nav = document.querySelector('nav');
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰';
    menuButton.classList.add('mobile-menu-button');
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Insert menu button before nav
    nav.parentNode.insertBefore(menuButton, nav);
    
    // Toggle nav visibility
    menuButton.addEventListener('click', function() {
        nav.classList.toggle('mobile-open');
    });
    
    // Add mobile styles
    const mobileStyle = document.createElement('style');
    mobileStyle.innerHTML = `
        .mobile-menu-button {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #333;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-button {
                display: block;
            }
            
            nav {
                display: none;
                width: 100%;
                margin-top: 20px;
            }
            
            nav.mobile-open {
                display: block;
            }
            
            nav ul {
                flex-direction: column;
                align-items: center;
            }
            
            nav ul li {
                margin: 10px 0;
            }
        }
    `;
    document.head.appendChild(mobileStyle);
};

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', createMobileMenu);

// Watch video modal functionality
const initVideoModal = function() {
    const videoButton = document.querySelector('.hero-buttons .btn-outline');
    if (!videoButton) return;
    
    // Create modal elements
    const modal = document.createElement('div');
    modal.classList.add('video-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.innerHTML = `
        .video-modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
        }
        
        .modal-content {
            position: relative;
            background-color: #000;
            margin: 5% auto;
            padding: 20px;
            border-radius: 10px;
            width: 80%;
            max-width: 800px;
        }
        
        .close {
            color: #fff;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            position: absolute;
            right: 25px;
            top: 15px;
            z-index: 1001;
        }
        
        .close:hover {
            color: #ccc;
        }
        
        .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
        }
        
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }
    `;
    document.head.appendChild(modalStyle);
    
    // Event listeners
    videoButton.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
};

// Initialize video modal
document.addEventListener('DOMContentLoaded', initVideoModal);

// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(function() {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 1000);
});

// Disable scroll until page is loaded
document.body.style.overflow = 'hidden';
