
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

const navLinks = document.querySelectorAll(".nav-menu a");

const sections = document.querySelectorAll(
    "main section[id]"
);


// =========================
// MOBILE NAVIGATION
// =========================

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =========================
// ACTIVE NAVIGATION
// =========================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${currentId}`) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        root: null,
        threshold: 0,
        rootMargin: "-35% 0px -55% 0px"
    }

);


// Observe every section

sections.forEach((section) => {

    observer.observe(section);

});
