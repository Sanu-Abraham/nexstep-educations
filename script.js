document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const linkPage = link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.style.color = "#60A5FA";
        }

    });

    /* =========================
       SCROLL REVEAL ANIMATION
    ========================= */

    const revealElements = document.querySelectorAll(
        ".feature-card, .course-card, .testimonial, .step, .card"
    );

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.7s ease";
    });

    const revealOnScroll = () => {

        revealElements.forEach(el => {

            const rect = el.getBoundingClientRect();

            if (rect.top < window.innerHeight - 100) {

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /* =========================
       ANIMATED COUNTERS
    ========================= */

    const counters = document.querySelectorAll(".stats h3");

    let counterStarted = false;

    function animateCounters() {

        if (counterStarted) return;

        const statsSection = document.querySelector(".stats");

        if (!statsSection) return;

        const sectionTop = statsSection.getBoundingClientRect().top;

        if (sectionTop > window.innerHeight - 150) return;

        counterStarted = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text.replace(/\D/g, ""));

            let current = 0;

            const increment = Math.ceil(number / 60);

            const update = () => {

                current += increment;

                if (current >= number) {

                    counter.innerText = text;

                } else {

                    counter.innerText = current + "+";

                    requestAnimationFrame(update);
                }

            };

            update();

        });

    }

    window.addEventListener("scroll", animateCounters);

    animateCounters();

    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const button =
                contactForm.querySelector("button");

            button.innerText = "Message Sent ✓";

            button.disabled = true;

        });

    }

    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(11,17,32,0.98)";

            navbar.style.borderBottom =
                "1px solid rgba(255,255,255,.08)";

        } else {

            navbar.style.background =
                "rgba(11,17,32,0.92)";
        }

    });

});