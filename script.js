// ------------------------------
// NAVIGATION ACTIVE
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});

// ------------------------------
// VALIDATION FORMULAIRE CONTACT
// ------------------------------
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Empêche l’envoi classique

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("⚠️ Veuillez remplir tous les champs !");
            return;
        }

        // Vérification email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("⚠️ Veuillez entrer un email valide !");
            return;
        }

        // Message de confirmation
        alert("✅ Merci " + name + " ! Votre message a été envoyé avec succès.");
        form.reset();
    });
}

// ------------------------------
// ANIMATION AU SCROLL
// ------------------------------
const cards = document.querySelectorAll(".project-card, .hobby-card");

function showCardsOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showCardsOnScroll);
showCardsOnScroll(); // lancer au chargement

// ------------------------------
// EFFET HERO (TEXTE QUI S'ÉCRIT)
// ------------------------------
const heroTitle = document.querySelector(".hero h1");
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80); // vitesse d’écriture
        }
    }
    typeWriter();
}
