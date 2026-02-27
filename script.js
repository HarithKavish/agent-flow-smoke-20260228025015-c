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
                glowColorValue = 'rgba(0, 212, 255, 0.1)';
                break;
            case 'green':
                glowColorValue = 'rgba(0, 204, 0, 0.1)';
                break;
            case 'cyan':
                glowColorValue = 'rgba(0, 255, 255, 0.1)';
                break;
        }

        glowPattern.style.background = `linear-gradient(45deg, ${glowColorValue}, ${glowColorValue})`;
    });

    glowIntensity.addEventListener('input', function() {
        const intensity = this.value;
        const baseIntensity = 0.1;
        const maxIntensity = 0.3;

        const adjustedIntensity = baseIntensity + (maxIntensity - baseIntensity) * (intensity / 10);
        glowPattern.style.background = `linear-gradient(45deg, rgba(0, 212, 255, ${adjustedIntensity}), rgba(0, 212, 255, ${adjustedIntensity * 0.7}))`;
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

    // Add hover effects for cards
    const cards = document.querySelectorAll('.content-card, .species-card, .ecology-item, .use-item, .conservation-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add animation to introduction section
    const introductionSection = document.getElementById('introduction');
    introductionSection.addEventListener('scroll', function() {
        if (window.scrollY > introductionSection.offsetHeight / 2) {
            introductionSection.style.opacity = '0.95';
        } else {
            introductionSection.style.opacity = '1';
        }
    });
});