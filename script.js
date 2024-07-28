document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        "I'm: studying EE and CS @ uOttawa this coming Fall.",
        "I've: expanded education in public speaking.",
        "I'm: excited to learn more."
    ];
    const typingTextElement = document.querySelector('.typing-text');
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 65;
    const deletingSpeed = 70;
    const delayBetweenTexts = 2000;
    const delayAfterDelete = 1000;

    function type() {
        if (charIndex < texts[textIndex].length) {
            typingTextElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(deleteText, delayAfterDelete);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, delayBetweenTexts);
        }
    }

    setTimeout(type, 1500);

    const darkModeToggle = document.createElement('img');
    darkModeToggle.src = 'moon.svg';
    darkModeToggle.alt = 'Toggle dark mode';
    darkModeToggle.classList.add('dark-mode-toggle');

    document.querySelector('nav').appendChild(darkModeToggle);

    const currentMode = localStorage.getItem('theme') || 'light';
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.src = 'sun.svg';
    }

    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        darkModeToggle.src = isDarkMode ? 'sun.svg' : 'moon.svg';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    const footer = document.querySelector('.footer');

    if (document.body.scrollHeight <= window.innerHeight) {
        footer.classList.add('visible');
    }

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.classList.add('visible');
        }
    });
});