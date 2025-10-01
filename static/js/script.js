// Enhanced Quiz functionality with animations and feedback
function checkQuiz() {
    const answers = {
        q1: 'a', // Strong password
        q2: 'b', // Two-factor authentication
        q3: 'c', // Avoid public Wi-Fi
        q4: 'b', // VPN
        q5: 'a'  // Regular updates
    };
    let score = 0;
    const questions = document.querySelectorAll('.question');
    
    // Reset previous styling
    questions.forEach(q => {
        q.style.borderLeft = '5px solid #667eea';
        q.style.background = 'linear-gradient(135deg, #f8f9ff, #e8f0fe)';
    });
    
    for (let q in answers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        const questionDiv = document.querySelector(`input[name="${q}"]`).closest('.question');
        
        if (selected && selected.value === answers[q]) {
            score++;
            questionDiv.style.borderLeft = '5px solid #28a745';
            questionDiv.style.background = 'linear-gradient(135deg, #d4edda, #c3e6cb)';
        } else {
            questionDiv.style.borderLeft = '5px solid #dc3545';
            questionDiv.style.background = 'linear-gradient(135deg, #f8d7da, #f1aeb5)';
        }
    }
    
    const result = document.getElementById('result');
    const percentage = Math.round((score / Object.keys(answers).length) * 100);
    
        result.innerHTML = `
        <div style="font-size: 1.5em; margin-bottom: 10px;"><i class="fas fa-chart-bar"></i> Quiz Results</div>
        <div>You got ${score} out of ${Object.keys(answers).length} correct!</div>
        <div style="font-size: 1.2em; margin-top: 10px;">${percentage}% Security Awareness</div>
    `;
    
    if (percentage >= 80) {
        result.style.background = 'linear-gradient(135deg, #d4edda, #c3e6cb)';
        result.style.color = '#155724';
        result.innerHTML += '<div style="margin-top: 10px;"><i class="fas fa-shield-alt"></i> Excellent! You\'re well-prepared!</div>';
    } else if (percentage >= 60) {
        result.style.background = 'linear-gradient(135deg, #fff3cd, #ffeaa7)';
        result.style.color = '#856404';
        result.innerHTML += '<div style="margin-top: 10px;"><i class="fas fa-exclamation-triangle"></i> Good, but room for improvement!</div>';
    } else {
        result.style.background = 'linear-gradient(135deg, #f8d7da, #f1aeb5)';
        result.style.color = '#721c24';
        result.innerHTML += '<div style="margin-top: 10px;"><i class="fas fa-exclamation-circle"></i> Consider reviewing the tips above!</div>';
    }    // Animate the meter
    updateSecurityMeter(percentage);
    
    // Scroll to results
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Enhanced Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === 'block';
            
            // Close all other accordions
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.style.display = 'none';
            });
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
            });
            
            if (!isOpen) {
                content.style.display = 'block';
                this.classList.add('active');
                
                // Animate content appearance
                content.style.opacity = '0';
                content.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    content.style.transition = 'all 0.3s ease';
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }, 10);
            }
        });
    });
    
    // Initialize floating shapes
    createFloatingShapes();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize progress bar
    initProgressBar();
    
    // Initialize security meter
    initSecurityMeter();
});

// Scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Progress bar
function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Floating shapes animation
function createFloatingShapes() {
    const container = document.createElement('div');
    container.className = 'floating-shapes';
    document.body.appendChild(container);
    
    for (let i = 0; i < 6; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.width = (Math.random() * 100 + 50) + 'px';
        shape.style.height = shape.style.width;
        shape.style.animationDelay = Math.random() * 6 + 's';
        container.appendChild(shape);
    }
}

// Security meter
function initSecurityMeter() {
    const meter = document.createElement('div');
    meter.className = 'security-meter';
    meter.innerHTML = `
        <h3>Your Current Security Level</h3>
        <div class="meter-bar">
            <div class="meter-fill" id="meterFill"></div>
        </div>
        <p id="meterText">Complete the quiz to see your security awareness level!</p>
    `;
    document.getElementById('quiz').appendChild(meter);
}

function updateSecurityMeter(percentage) {
    const fill = document.getElementById('meterFill');
    const text = document.getElementById('meterText');
    
    setTimeout(() => {
        fill.style.width = percentage + '%';
        text.textContent = `Security Awareness: ${percentage}%`;
    }, 500);
}

// Interactive tips with hover effects
function initInteractiveTips() {
    const tips = document.querySelectorAll('.tip-item');
    tips.forEach(tip => {
        tip.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
        });
        
        tip.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
    });
}

// Smooth scrolling for navigation
function smoothScroll(targetId) {
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Password strength checker (interactive demo)
function checkPasswordStrength(password) {
    let strength = 0;
    const checks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        numbers: /\d/.test(password),
        symbols: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    strength = Object.values(checks).filter(Boolean).length;
    
    return {
        strength: strength,
        checks: checks,
        percentage: (strength / 5) * 100
    };
}