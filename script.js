// ==============================
// Welcome Message
// ==============================

console.log("Welcome to Varun V S Portfolio");


// ==============================
// Navbar Shadow on Scroll
// ==============================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        nav.style.boxShadow = "none";
    }

});


// ==============================
// Fade-in Animation
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});
// ==============================
// Typing Animation
// ==============================

const text = [
    "Agriculture Graduate",
    "MBA Student",
    "HR Intern",
    "Data Analytics Enthusiast"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    if (charIndex < text[textIndex].length) {

        typingElement.innerHTML += text[textIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.innerHTML = text[textIndex].substring(0, charIndex - 1);
        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        textIndex++;

        if (textIndex >= text.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

if (typingElement) {
    typeEffect();
}
// ==============================
// Back to Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==============================
// Active Navigation
// ==============================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
// ==============================
// Preloader
// ==============================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        setTimeout(function () {
            preloader.style.display = "none";
        }, 1000); // Shows loader for 1 second
    }

});
