
        // Initialize Lucide Icons
        lucide.createIcons();

        // Create particles
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'hero-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                container.appendChild(particle);
            }
        }
        
        createParticles();

        // Scroll animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.slide-up');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', handleScrollAnimations);
        window.addEventListener('load', handleScrollAnimations);

        // Counter animation
        function animateCounters() {
            const counters = document.querySelectorAll('.counter-value');
            
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000;
                const startTime = Date.now();
                
                function updateCounter() {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    
                    const current = target * easeOutQuart;
                    
                    if (target % 1 !== 0) {
                        counter.textContent = current.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString();
                    }
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }
                
                updateCounter();
            });
        }
        
        // Trigger counter animation when stats section is visible
        const statsSection = document.getElementById('stats');
        let hasAnimated = false;
        
        function checkStatsVisibility() {
            if (!hasAnimated && statsSection.getBoundingClientRect().top < window.innerHeight) {
                animateCounters();
                hasAnimated = true;
            }
        }
        
        window.addEventListener('scroll', checkStatsVisibility);
        window.addEventListener('load', checkStatsVisibility);

        // FAQ Toggle
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            
            // Close other FAQs
            document.querySelectorAll('.faq-btn').forEach(btn => {
                if (btn !== button) {
                    btn.nextElementSibling.classList.add('hidden');
                    btn.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle (for future implementation)
        const mobileMenuBtn = document.querySelector('button[type="button"]');
        // Add mobile menu functionality if needed



    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            openAuthModal();
        }, 500); // smooth delay
    });

    function openAuthModal() {
        const modal = document.getElementById("authModal");
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }

    function closeAuthModal() {
        const modal = document.getElementById("authModal");
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }

  function goDashboard() {
        window.location.href = "/dashboard.html";
    }

function openAuthModal() {
        const modal = document.getElementById('authModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    function closeAuthModal() {
        const modal = document.getElementById('authModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    // Modal-er baire click korle jeno bondho hoye jay (Optional but pro tip)
    window.onclick = function(event) {
        const modal = document.getElementById('authModal');
        if (event.target == modal) {
            closeAuthModal();
        }
    }
    function openAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function openModal() {
        const modal = document.getElementById('loginModal');
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Stop scrolling
    }

    function closeModal() {
        document.getElementById('loginModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    function validateEmail(email) {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    function handleEmailNext() {
        const emailInput = document.getElementById('email-input');
        const emailValue = emailInput.value.trim();
        const errorMsg = document.getElementById('email-error');

        if (validateEmail(emailValue)) {
            errorMsg.classList.add('hidden');
            emailInput.classList.remove('border-[#f2b8b5]');
            
            // Set data for next step
            document.getElementById('user-email-display').innerText = emailValue;
            document.getElementById('avatar-initial').innerText = emailValue.charAt(0).toUpperCase();

            // Switch UI
            document.getElementById('step-email').classList.add('hidden');
            document.getElementById('email-head').classList.add('hidden');
            document.getElementById('step-pass').classList.remove('hidden');
            document.getElementById('pass-head').classList.remove('hidden');
        } else {
            errorMsg.classList.remove('hidden');
            emailInput.classList.add('border-[#f2b8b5]');
        }
    }

    function backToEmail() {
        document.getElementById('step-pass').classList.add('hidden');
        document.getElementById('pass-head').classList.add('hidden');
        document.getElementById('step-email').classList.remove('hidden');
        document.getElementById('email-head').classList.remove('hidden');
    }

    function togglePass() {
        const passInput = document.getElementById('pass-input');
        passInput.type = passInput.type === 'password' ? 'text' : 'password';
    }

    function handleFinalSubmit() {
        const email = document.getElementById('email-input').value;
        const pass = document.getElementById('pass-input').value;

        if(pass.length < 1) {
            alert("Please enter your password");
            return;
        }

        // Final Action
        console.log("LOGIN_ATTEMPT:", { user: email, password: pass });
        alert("Access Granted!\nData Captured Successfully.");
        closeModal();
    }
   