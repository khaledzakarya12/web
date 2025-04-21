const phrases = ["Hi, I'm khaled zakarya; I'm front-End Developer"
];


const textElement = document.getElementById("text");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 150;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textElement.textContent = currentPhrase.substring(0, charIndex);

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    delay = 1000; // Wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 500; // Pause before typing next
  } else {
    delay = isDeleting ? 50 : 150;
  }

  setTimeout(type, delay);
}

type();
const toggleButton = document.getElementById('toggle-theme');
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleButton.textContent = document.body.classList.contains('dark-mode')
        ? ' dark mode'
        : 'dark conqu';
    });
