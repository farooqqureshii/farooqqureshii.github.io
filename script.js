// only run after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // check if the page contains the typing text element
    const typingTextElement = document.querySelector('.typing-text');
    if (typingTextElement) {
        // array of texts to type
        const texts = [
            "studying EE and CS @ uOttawa this coming Fall.",
            "a leader in expanding public speaking.",
            "excited to learn more."
        ];

        // html element for text
        const fixedTextElement = document.createElement('span');
        fixedTextElement.textContent = "Hi, I'm: ";
        fixedTextElement.classList.add('fixed-text');  // Apply the class for consistent styling
        typingTextElement.appendChild(fixedTextElement);

        const dynamicTextElement = document.createElement('span');
        typingTextElement.appendChild(dynamicTextElement);

        // for iteration
        let textIndex = 0;
        let charIndex = 0;

        // speed settings
        const typingSpeed = 65;
        const deletingSpeed = 70;
        const delayBetweenTexts = 2000;
        const delayAfterDelete = 1000;

        function type() {
            // if current index in iteration is < than the length of the text, then we add the next character to type
            if (charIndex < texts[textIndex].length) {
                dynamicTextElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                
                // delay time
                setTimeout(type, typingSpeed);
            } else {
                // if the whole sentence is typed, then we want to start deleting
                setTimeout(deleteText, delayAfterDelete);
            }
        }

        function deleteText() {
            // ie: if we have not fully iterated through (stuff to delete)
            if (charIndex > 0) {
                // start by removing one character
                dynamicTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                // decrement to continue taking ones off
                charIndex--;
                setTimeout(deleteText, deletingSpeed);
            } else {
                // move to the next text
                textIndex = (textIndex + 1) % texts.length;
                // delay
                setTimeout(type, delayBetweenTexts);
            }
        }

        // time for delay
        setTimeout(type, 1500);
    }

    // DARK MODE TOGGLE

    // image for dark mode
    const darkModeToggle = document.createElement('img');
    darkModeToggle.src = 'moon.svg';
    darkModeToggle.alt = 'Toggle dark mode';
    // styling
    darkModeToggle.classList.add('dark-mode-toggle');

    // add to navbar
    document.querySelector('nav').appendChild(darkModeToggle);

    // set the default to light theme
    const currentMode = localStorage.getItem('theme') || 'light';
    if (currentMode === 'dark') {
        // theme dark -> switch to dark mode and switch the icon
        document.body.classList.add('dark-mode');
        darkModeToggle.src = 'sun.svg';
    }

    // event listener, on click -> toggle dark mode and update the toggle
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        darkModeToggle.src = isDarkMode ? 'sun.svg' : 'moon.svg';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    const footer = document.querySelector('.footer');

    // FOOTER

    // if document height is <= to window height, then make the footer visible (if this doesn't occur, then the footer would not show)
    if (document.body.scrollHeight <= window.innerHeight) {
        footer.classList.add('visible');
    }

    // event listener, if the user scrolls to the bottom of the page, then they can see the footer
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.classList.add('visible');
        }
    });
});
