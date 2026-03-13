// Mobile menu functionality
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll reveal animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger once on load to show visible elements
reveal();


// Booking Modal Logic
const modal = document.getElementById("booking-modal");
const openModalBtns = document.querySelectorAll(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal");
const bookingForm = document.getElementById("booking-form");

// Open modal
openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });
});

// Close modal
function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";

    // Reset dynamic inputs
    if (otherServiceGroup) {
        otherServiceGroup.style.display = "none";
        otherServiceInput.required = false;
        otherServiceInput.value = "";
    }
}

closeModalBtn.addEventListener("click", closeModal);

// Close on outside click
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Dynamic "Other" service input toggle
const serviceSelect = document.getElementById("service");
const otherServiceGroup = document.getElementById("other-service-group");
const otherServiceInput = document.getElementById("other-service");

serviceSelect.addEventListener("change", (e) => {
    if (e.target.value === "other") {
        otherServiceGroup.style.display = "block";
        otherServiceInput.required = true;
    } else {
        otherServiceGroup.style.display = "none";
        otherServiceInput.required = false;
        otherServiceInput.value = ""; // Clear if they change mind
    }
});

// Handle form submission UX (Formspree will handle the actual redirect)
bookingForm.addEventListener("submit", () => {
    const submitBtn = bookingForm.querySelector("button[type=\"submit\"]");

    // UI Loading state before redirect
    submitBtn.textContent = "Redirecting to Secure Request...";
    submitBtn.style.opacity = "0.7";
    submitBtn.disabled = true;
});

