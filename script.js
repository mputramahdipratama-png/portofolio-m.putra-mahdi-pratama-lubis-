const text = [
    "Infinite Learning 2026",
    "FreshStart Project",
    "fronten Developer",
    "Mobile Defeloper",
    "Hecker (Developer)"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");

function type() {
    currentText = text[index];

    if (!isDeleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex++);
    } else {
        typingElement.textContent =
            currentText.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(type, speed);
}

type();

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});

const darkBtn = document.getElementById("darkMode");

function updateDarkModeIcon() {
    const isDark = document.body.classList.contains("dark");
    darkBtn.textContent = isDark ? "🌙" : "☀️";
    darkBtn.title = isDark ? "Mode terang" : "Mode gelap";
}

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateDarkModeIcon();
});

updateDarkModeIcon();