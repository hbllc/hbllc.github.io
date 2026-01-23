// ==========================================
// Navigation & Theme Toggle
// ==========================================

// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(45deg) translate(5px, 5px)' 
        : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(-45deg) translate(7px, -6px)' 
        : 'none';
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle?.querySelector('i');

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    if (themeIcon) themeIcon.className = 'fas fa-sun';
}

themeToggle?.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    
    if (themeIcon) {
        themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // Save theme preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Keyboard shortcut for theme toggle (Ctrl/Cmd + K)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        themeToggle?.click();
    }
});

// ==========================================
// Navigation Scroll Effect
// ==========================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove shadow on scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ==========================================
// Active Navigation Link on Scroll
// ==========================================

const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Scroll to Top Button
// ==========================================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn?.classList.add('visible');
    } else {
        scrollTopBtn?.classList.remove('visible');
    }
});

scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Counter Animation for Stats
// ==========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Intersection Observer for counter animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(stat => {
    statObserver.observe(stat);
});

// ==========================================
// Fade-in Animation on Scroll
// ==========================================

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe timeline items and other elements
document.querySelectorAll('.timeline-item, .skill-category, .contact-card').forEach(el => {
    fadeInObserver.observe(el);
});

// ==========================================
// Copy Email to Clipboard
// ==========================================

const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const textToCopy = btn.getAttribute('data-copy');
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> 已复制';
            btn.style.backgroundColor = 'var(--primary-color)';
            btn.style.color = 'white';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('复制失败，请手动复制');
        });
    });
});

// ==========================================
// Typing Effect for Hero Subtitle (Optional)
// ==========================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// const typingElement = document.querySelector('.typing-cursor');
// if (typingElement) {
//     const text = typingElement.textContent;
//     typeWriter(typingElement, text, 80);
// }

// ==========================================
// Easter Egg: Console Message
// ==========================================

console.log('%c👋 嘿，开发者朋友！', 'color: #00d9ff; font-size: 24px; font-weight: bold;');
console.log('%c如果你对这个网站感兴趣，可以查看源代码学习！', 'color: #667eea; font-size: 16px;');
console.log('%c联系我：li_lichuan@126.com', 'color: #f093fb; font-size: 14px;');

// ==========================================
// Prevent Console Errors
// ==========================================

window.addEventListener('error', (e) => {
    // Optional: Handle errors silently or log them
    // console.error('Error caught:', e.message);
});

// ==========================================
// Performance Optimization
// ==========================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    updateActiveNav();
}, 10));

// ==========================================
// Accessibility: Skip to Content
// ==========================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ==========================================
// Initialize on Page Load
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
    // Update active nav on initial load
    updateActiveNav();
    
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Optional: Show loading indicator
    // const loader = document.querySelector('.loader');
    // if (loader) loader.style.display = 'none';
});

// ==========================================
// Lazy Loading Images (if needed)
// ==========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Module Card Expand/Collapse (Optional)
// ==========================================

// Uncomment if you want to add expand/collapse functionality
// document.querySelectorAll('.module-header').forEach(header => {
//     header.style.cursor = 'pointer';
//     header.addEventListener('click', () => {
//         const moduleList = header.nextElementSibling;
//         if (moduleList) {
//             moduleList.style.display = moduleList.style.display === 'none' ? 'block' : 'none';
//         }
//     });
// });

// ==========================================
// Print Styles Trigger
// ==========================================

window.addEventListener('beforeprint', () => {
    // Expand all collapsible sections before printing
    document.querySelectorAll('.module-list').forEach(list => {
        list.style.display = 'block';
    });
});

// ==========================================
// Analytics (Optional - Add your tracking code)
// ==========================================

// Example: Google Analytics
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'YOUR-GA-ID');

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.textContent.trim();
        console.log('Button clicked:', buttonText);
        
        // Send to analytics
        // gtag('event', 'button_click', {
        //     'event_category': 'engagement',
        //     'event_label': buttonText
        // });
    });
});

// ==========================================
// WeChat QR Code Modal
// ==========================================

function initWeChatQRModal() {
    const showWechatQR = document.getElementById('showWechatQR');
    const showWechatQRHero = document.getElementById('showWechatQRHero');
    const qrModal = document.getElementById('qrModal');
    const closeQRModal = document.getElementById('closeQRModal');

    function openQRModal() {
        qrModal?.classList.add('show');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }

    // 绑定首页和联系方式区域的微信按钮
    showWechatQR?.addEventListener('click', openQRModal);
    showWechatQRHero?.addEventListener('click', openQRModal);

    // 关闭按钮
    closeQRModal?.addEventListener('click', () => {
        qrModal?.classList.remove('show');
        document.body.style.overflow = ''; // 恢复滚动
    });

    // 点击模态框外部关闭
    qrModal?.addEventListener('click', (e) => {
        if (e.target === qrModal) {
            qrModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && qrModal?.classList.contains('show')) {
            qrModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// 初始化微信二维码模态框
initWeChatQRModal();