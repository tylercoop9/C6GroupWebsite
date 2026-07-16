/* =========================================================
   C6 GROUP WEBSITE — SCRIPTS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- MOBILE NAV TOGGLE ---------- */

    var navToggle = document.querySelector(".nav-toggle");
    var mainNav = document.querySelector(".main-nav");

    if (navToggle && mainNav) {

        navToggle.addEventListener("click", function () {
            var isOpen = mainNav.classList.toggle("nav-open");
            navToggle.setAttribute("aria-expanded", isOpen);
        });

        mainNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                mainNav.classList.remove("nav-open");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* ---------- FOOTER YEAR ---------- */

    var yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* ---------- CONTACT FORM (front-end placeholder) ---------- */

    var form = document.getElementById("contactForm");
    var status = document.getElementById("formStatus");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            if (status) {
                status.textContent =
                    "Thanks for reaching out — this form is a template. " +
                    "Connect it to your email or a service like Formspree " +
                    "or Netlify Forms to start receiving messages.";
            }

            form.reset();
        });
    }

    /* ---------- SCROLL REVEAL ---------- */

    var revealEls = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealEls.length) {

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

        revealEls.forEach(function (el) {
            io.observe(el);
        });

    } else {
        revealEls.forEach(function (el) {
            el.classList.add("is-visible");
        });
    }

});
