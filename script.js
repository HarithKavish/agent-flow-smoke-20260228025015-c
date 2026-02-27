document.addEventListener('DOMContentLoaded', function() {
    // Glow Show Controls
    const glowSpeed = document.getElementById('glowSpeed');
    const glowColor = document.getElementById('glowColor');
    const glowIntensity = document.getElementById('glowIntensity');
    const glowPattern = document.getElementById('glowPattern');

    // Update glow pattern based on user input
    glowSpeed.addEventListener('input', function() {
        const speed = this.value;
        glowPattern.style.animationDuration = `${speed * 0.3}s`;
    });

    glowColor.addEventListener('change', function() {
        const color = this.value;
        let glowColorValue;

        switch(color) {
            case 'blue':
                glowColorValue = 'rgba(30, 144, 255, 0.1)';
                break;
            case 'green':
                glowColorValue = 'rgba(34, 197, 94, 0.1)';
                break;
            case 'cyan':
                glowColorValue = 'rgba(52, 205, 205, 0.1)';
                break;
            default:
                glowColorValue = 'rgba(100, 100, 100, 0.1)';
        }

        glowPattern.style.background = `linear-gradient(45deg, ${glowColorValue}, ${glowColorValue})`;
    });

    glowIntensity.addEventListener('input', function() {
        const intensity = this.value;
        const baseIntensity = 0.05;
        const maxIntensity = 0.2;

        const adjustedIntensity = baseIntensity + (maxIntensity - baseIntensity) * (intensity / 10);
        glowPattern.style.background = `linear-gradient(45deg, rgba(30, 144, 255, ${adjustedIntensity}), rgba(30, 144, 255, ${adjustedIntensity * 0.7}))`;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dark theme card styling with updated color scheme
    const cards = document.querySelectorAll('.content-card, .species-card, .ecology-item, .use-item, .conservation-item');
    cards.forEach(card => {
        card.style.backgroundColor = '#2d3748';
        card.style.color = '#e2e8f0';
        card.style.border = '1px solid #4a5568';
        card.style.borderRadius = '8px';
        card.style.padding = '20px';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        card.style.transition = 'all 0.3s ease';

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.backgroundColor = '#3d566e';
            this.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.backgroundColor = '#2d3748';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Dark theme introduction section
    const introductionSection = document.getElementById('introduction');
    introductionSection.style.backgroundColor = '#2d3748';
    introductionSection.style.color = '#e2e8f0';
    introductionSection.style.padding = '40px';
    introductionSection.style.borderTop = '1px solid #4a5568';
    introductionSection.style.borderRadius = '8px 8px 0 0';
    introductionSection.addEventListener('scroll', function() {
        if (window.scrollY > introductionSection.offsetHeight / 2) {
            this.style.opacity = '0.95';
            this.style.transform = 'translateY(-2px)';
        } else {
            this.style.opacity = '1';
            this.style.transform = 'translateY(0)';
        }
    });
});