/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


/* ================= CLOSE MOBILE MENU ================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


/* ================= SCROLL ANIMATION ================= */

const animatedItems = document.querySelectorAll(
    ".mini-service, .feature-card, .review-card, .about-content, .about-image"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },

        {
            threshold: 0.15
        }

    );

    animatedItems.forEach(function (item) {
        observer.observe(item);
    });

}


/* ================= NAVBAR SCROLL ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(4, 11, 20, 0.98)";

    } else {

        header.style.background =
            "rgba(7, 17, 31, 0.94)";

    }

});


/* ================= PACKAGE BOOKING ================= */

const packageButtons = document.querySelectorAll(
    'a[href*="contact.html#booking"]'
);

packageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        localStorage.setItem(
            "selectedPackage",
            "Velloura Glow Package"
        );

    });

});


/* ================= PAGE LOAD ================= */

document.addEventListener("DOMContentLoaded", function () {

    const selectedPackage =
        localStorage.getItem("selectedPackage");

    const serviceSelect =
        document.getElementById("service");

    if (selectedPackage && serviceSelect) {

        const options =
            serviceSelect.querySelectorAll("option");

        options.forEach(function (option) {

            if (
                option.textContent.trim() ===
                selectedPackage
            ) {

                option.selected = true;

            }

        });

        localStorage.removeItem("selectedPackage");

    }

});


/* ================= SERVICE TO BOOKING ================= */

const serviceSelect =
    document.getElementById("service");

if (serviceSelect) {

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const selectedService =
        urlParams.get("service");

    if (selectedService) {

        const serviceOption =
            Array.from(
                serviceSelect.options
            ).find(function (option) {

                return option.value === selectedService;

            });

        if (serviceOption) {

            serviceSelect.value =
                selectedService;

        }

    }

}


/* ================= BOOKING FORM ================= */

const bookingForm =
    document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                .value.trim();

            const phone =
                document.getElementById("phone")
                .value.trim();

            const email =
                document.getElementById("email")
                .value.trim();

            const service =
                document.getElementById("service")
                .value;

            const date =
                document.getElementById("date")
                .value;

            const time =
                document.getElementById("time")
                .value;

            const peopleElement =
                document.getElementById("people");

            const people =
                peopleElement
                    ? peopleElement.value
                    : "1";

            const messageElement =
                document.getElementById("message");

            const message =
                messageElement
                    ? messageElement.value.trim()
                    : "";


            /* ================= VALIDATION ================= */

            if (
                name === "" ||
                phone === "" ||
                service === "" ||
                date === "" ||
                time === ""
            ) {

                alert(
                    "Please fill in all required booking details."
                );

                return;

            }


            /* ================= WHATSAPP NUMBER ================= */

            const whatsappNumber =
                "92 3021297950";


            /* ================= WHATSAPP MESSAGE ================= */

            const whatsappMessage =
`✨ VELLOURA BEAUTY STUDIO

NEW BOOKING REQUEST

👤 Customer Details
Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

💆 Service
${service}

📅 Appointment Date
${date}

⏰ Appointment Time
${time}

👥 Number of People
${people}

📝 Additional Message
${message || "No additional message"}

Please confirm this appointment.`;


            /* ================= WHATSAPP URL ================= */

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            /* ================= OPEN WHATSAPP ================= */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* ================= GALLERY FILTER ================= */

const galleryButtons =
    document.querySelectorAll(
        ".gallery-btn"
    );

const galleryCards =
    document.querySelectorAll(
        ".gallery-card"
    );

if (
    galleryButtons.length > 0 &&
    galleryCards.length > 0
) {

    galleryButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {


                galleryButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                galleryCards.forEach(
                    function (card) {

                        if (
                            filter === "all" ||
                            card.classList.contains(
                                filter
                            )
                        ) {

                            card.classList.remove(
                                "hide-gallery"
                            );

                        } else {

                            card.classList.add(
                                "hide-gallery"
                            );

                        }

                    }
                );

            }
        );

    });

}


/* ================= ACTIVE PAGE ================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();

const allNavLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

allNavLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (
        linkPage &&
        linkPage === currentPage
    ) {

        link.classList.add("active");

    }

});


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.querySelector(".copyright");

if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} VELLOURA BEAUTY STUDIO. All Rights Reserved.`;

}
