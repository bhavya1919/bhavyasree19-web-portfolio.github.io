// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile menu toggle =====
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}

// ===== Typewriter Effect =====
const strings = [
  "Data Analytics",
  "Artificial Intelligence",
  "Python Programming",
  "Continuous Learner"
];

let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

const typewriterElement = document.getElementById('typewriter');

function type() {
  if (!typewriterElement) return;

  const currentString = strings[stringIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentString.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50; // delete faster
  } else {
    typewriterElement.textContent = currentString.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100; // type speed
  }

  // If word is complete
  if (!isDeleting && charIndex === currentString.length) {
    typeSpeed = 2000; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    stringIndex = (stringIndex + 1) % strings.length;
    typeSpeed = 500; // pause before next word
  }

  setTimeout(type, typeSpeed);
}

// Start typewriter when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  if (typewriterElement) {
    setTimeout(type, 1000); // initial delay
  }
});
