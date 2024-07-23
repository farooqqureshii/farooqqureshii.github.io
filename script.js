document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "I'm: studying EE and CS @ uOttawa this coming Fall.",
        "I've: expanded education in public speaking.",
        "I'm: excited to learn more."
    ];
    const typingTextElement = document.querySelector('.typing-text');
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Speed of typing
    const delayBetweenTexts = 2000; // Delay between texts in ms

    function type() {
        if (charIndex < texts[textIndex].length) {
            typingTextElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                typingTextElement.textContent = '';
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                type();
            }, delayBetweenTexts);
        }
    }

    // Start typing after all animations are done
    setTimeout(type, 1500); // Adjust this timeout to match the end of the fade-in animations

    // Dark mode toggle
    const darkModeToggle = document.createElement('img');
    darkModeToggle.src = 'moon.svg'; // Default icon
    darkModeToggle.alt = 'Toggle dark mode';
    darkModeToggle.classList.add('dark-mode-toggle');

    document.querySelector('nav').appendChild(darkModeToggle);

    // Load the saved theme from localStorage
    const currentMode = localStorage.getItem('theme') || 'light';
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.src = 'sun.svg'; // Dark mode icon
    }

    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        darkModeToggle.src = isDarkMode ? 'sun.svg' : 'moon.svg';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});

const footer = document.querySelector('.footer');

    // Show footer if no scrolling is required
    if (document.body.scrollHeight <= window.innerHeight) {
        footer.classList.add('visible');
    }

    // Show footer when scrolled to the bottom
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.classList.add('visible');
        }
    });