// ========================
// WEDDING INVITATION SCRIPT
// ========================

document.addEventListener('DOMContentLoaded', function() {
    const openingScreen = document.getElementById('opening-screen');
    const mainContent = document.getElementById('main-content');
    const beginBtn = document.getElementById('begin-btn');
    
    // Begin button click handler
    if (beginBtn) {
        beginBtn.addEventListener('click', openInvitation);
    }
    
    // Initialize main content if no opening screen
    if (!openingScreen && mainContent) {
        mainContent.style.display = 'flex';
        mainContent.classList.add('content-visible');
        initMainContent();
    }
});

// Open invitation function
function openInvitation() {
    const openingScreen = document.getElementById('opening-screen');
    const mainContent = document.getElementById('main-content');
    const beginBtn = document.getElementById('begin-btn');
    
    // Disable button during transition
    if (beginBtn) {
        beginBtn.disabled = true;
        beginBtn.classList.remove('pulse-animation');
        beginBtn.style.opacity = '0.7';
    }
    
    // Add click sound
    const clickSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3');
    clickSound.volume = 0.3;
    clickSound.play().catch(console.log);
    
    // Create particle effect
    createGoldParticles(beginBtn);
    
    // Slide up opening screen
    if (openingScreen) {
        openingScreen.classList.add('slide-up');
        
        // Show main content after animation
        setTimeout(() => {
            if (openingScreen) {
                openingScreen.style.display = 'none';
            }
            
            if (mainContent) {
                mainContent.style.display = 'flex';
                setTimeout(() => {
                    mainContent.classList.add('content-visible');
                    initMainContent();
                    window.scrollTo(0, 0);
                }, 100);
            }
        }, 1200);
    }
}

// Initialize main content
function initMainContent() {
    console.log('Initializing main content...');
    
    // 1. Scroll Progress
    window.addEventListener('scroll', updateScrollProgress);
    
    // 2. Fireflies
    initFireflies();
    
    // 3. Countdown
    initCountdown();
    
    // 4. Typewriter
    initTypewriter();
    
    // 5. Stats Counter
    initStatsCounter();
    
    // 6. Cursor Trail
    initCursorTrail();
    
    // 7. Language Switcher
    initLanguageSwitcher();
    
    // 8. 3D Tilt Effect
    initTiltEffect();
    
    // 9. Calendar Button
    initCalendarButton();
    
    // 10. Copy Button
    initCopyButton();
    
    // 11. Scroll Animations
    initScrollAnimations();
    
    // 12. Lightbox
    initLightbox();
    
    // 13. Guestbook
    initGuestbook();
}

// Scroll Progress
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = scrolled + "%";
    }
}

// Fireflies
function initFireflies() {
    const container = document.getElementById('firefly-container');
    if (!container) return;
    
    setInterval(() => {
        const firefly = document.createElement('div');
        firefly.className = 'main-firefly';
        firefly.style.left = Math.random() * 100 + 'vw';
        firefly.style.animationDuration = (Math.random() * 5 + 8) + 's';
        firefly.style.transform = `translateX(${Math.random() * 50 - 25}px)`;
        container.appendChild(firefly);
        
        setTimeout(() => {
            if (firefly.parentNode === container) {
                container.removeChild(firefly);
            }
        }, 13000);
    }, 500);
}


// Countdown Timer
function initCountdown() {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    
    if (!daysEl || !hoursEl || !minutesEl) return;
    
    const targetDate = new Date("2026-02-22T17:00:00+07:00").getTime();
    
    function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;
        
        if (diff > 0) {
            daysEl.textContent = Math.floor(diff / 86400000).toString().padStart(2, '0');
            hoursEl.textContent = Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0');
            minutesEl.textContent = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
        } else {
            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
        }
    }
    
    update();
    setInterval(update, 1000);
}

// Typewriter Effect
function initTypewriter() {
    const element = document.getElementById("typewriter-text");
    if (!element) return;
    
    const text = "ម៉ូត​​​​​ ណាវីន ❤️ ជុំ​ សេរីរត្ន័";
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 120);
        } else {
            // Hide cursor when done
            const cursor = document.querySelector('.cursor');
            if (cursor) cursor.style.display = 'none';
        }
    }
    
    setTimeout(type, 1000);
}

// Stats Counter
function initStatsCounter() {
    const section = document.getElementById('stats-section');
    if (!section) return;
    
    let animated = false;
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !animated) {
            animated = true;
            document.querySelectorAll('.stat-number').forEach(stat => {
                const target = +stat.getAttribute('data-target');
                let current = 0;
                const increment = target / 50;
                
                function update() {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.ceil(current);
                        requestAnimationFrame(update);
                    } else {
                        stat.textContent = target;
                    }
                }
                
                update();
            });
        }
    }, { threshold: 0.5 });
    
    observer.observe(section);
}

// Cursor Trail
function initCursorTrail() {
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.left = e.pageX + 'px';
        dot.style.top = e.pageY + 'px';
        document.body.appendChild(dot);
        
        setTimeout(() => {
            if (dot.parentNode === document.body) {
                document.body.removeChild(dot);
            }
        }, 1000);
    });
}

// Language Switcher
function initLanguageSwitcher() {
    const btn = document.getElementById('lang-btn');
    if (!btn) return;
    
    let currentLang = 'en';
    
    btn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'kh' : 'en';
        
        document.querySelectorAll('[data-en]').forEach(el => {
            const newText = el.getAttribute(`data-${currentLang}`);
            if (newText) {
                el.textContent = newText;
            }
        });
    });
}


// 3D Tilt Effect
function initTiltEffect() {
    const cards = document.querySelectorAll('.tilt-effect');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });
}

// Calendar Button
function initCalendarButton() {
    const btn = document.getElementById('calendar-btn');
    if (!btn) return;
    
    btn.addEventListener('click', () => {
        const event = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            'DTSTART:20260222T100000Z',
            'DTEND:20260222T150000Z',
            'SUMMARY:Wedding of Navin & Sreyroat',
            'LOCATION:City Hall, Battambang',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\n');
        
        const blob = new Blob([event], { type: 'text/calendar' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'wedding.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Copy Button
function initCopyButton() {
    const btn = document.getElementById('copy-btn');
    if (!btn) return;
    
    btn.addEventListener('click', () => {
        const accNum = document.getElementById('aba-number');
        const text = accNum ? accNum.textContent : '12345678';
        
        navigator.clipboard.writeText(text).then(() => {
            const original = btn.innerHTML;
            btn.innerHTML = '✅';
            
            setTimeout(() => {
                btn.innerHTML = original;
            }, 2000);
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Lightbox
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    
    if (!lightbox || !lightboxImg || !closeBtn) return;
    
    // Open lightbox
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    
    // Close when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}


// Guestbook
function initGuestbook() {
    const form = document.getElementById('guestbook-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('guest-name').value.trim();
        const message = document.getElementById('guest-message').value.trim();
        const display = document.getElementById('messages-display');
        
        if (name && message && display) {
            const item = document.createElement('div');
            item.className = 'message-item';
            item.innerHTML = `<strong>${name}</strong><br>${message}`;
            display.prepend(item);
        }
        
        form.reset();
    });
}

// Gold Particles
function createGoldParticles(button) {
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #ffd700 30%, #bf953f 70%);
            border-radius: 50%;
            top: ${centerY}px;
            left: ${centerX}px;
            pointer-events: none;
            z-index: 10001;
            filter: blur(1px);
        `;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 70;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, 
                opacity: 0 
            }
        ], {
            duration: 600 + Math.random() * 400,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
        });
        
        setTimeout(() => {
            if (particle.parentNode === document.body) {
                document.body.removeChild(particle);
            }
        }, 1000);
    }
}
