/* =====================================================
        FUTURE DEVELOPER PORTFOLIO
        SCRIPT.JS
===================================================== */

/* ===========================================
            TYPING ANIMATION
=========================================== */

const typingText = [
  "Aspiring Software Engineer",
  "Future AI Developer",
  "Frontend Web Developer",
  "Problem Solver",
  "Tech Enthusiast"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

  if (charIndex < typingText[textIndex].length) {

    typingElement.textContent += typingText[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeText, 80);

  }

  else {

    setTimeout(deleteText, 2000);

  }

}

function deleteText() {

  if (charIndex > 0) {

    typingElement.textContent = typingText[textIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(deleteText, 40);

  }

  else {

    textIndex++;

    if (textIndex >= typingText.length) {

      textIndex = 0;

    }

    setTimeout(typeText, 500);

  }

}

typeText();

/* ===========================================
            DARK MODE
=========================================== */

const darkButton = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark");

}

darkButton.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {

    localStorage.setItem("theme", "dark");

  }

  else {

    localStorage.setItem("theme", "light");

  }

});

/* ===========================================
            NAVBAR SHADOW
=========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.classList.add("scrolled");

  }

  else {

    navbar.classList.remove("scrolled");

  }

});

/* ===========================================
            BACK TO TOP
=========================================== */

const topButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    topButton.style.display = "flex";

  }

  else {

    topButton.style.display = "none";

  }

});

topButton.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

/* ===========================================
            SMOOTH SCROLL
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

/* ===========================================
            SCROLL REVEAL
=========================================== */

const reveals = document.querySelectorAll("section");

function revealSections() {

  reveals.forEach(section => {

    const windowHeight = window.innerHeight;

    const revealTop = section.getBoundingClientRect().top;

    if (revealTop < windowHeight - 120) {

      section.classList.add("fade-in");

    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();
/* =====================================================
        ACHIEVEMENT COUNTERS
===================================================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

  if (counterStarted) return;

  const achievementSection = document.querySelector(".counter-box");

  if (!achievementSection) return;

  const position = achievementSection.getBoundingClientRect().top;

  if (position < window.innerHeight - 100) {

    counterStarted = true;

    counters.forEach(counter => {

      const target = +counter.dataset.target;

      let count = 0;

      const speed = target / 100;

      const updateCounter = () => {

        count += speed;

        if (count < target) {

          counter.innerText = Math.floor(count);

          requestAnimationFrame(updateCounter);

        } else {

          counter.innerText = target +"+";

        }

      };

      updateCounter();

    });

  }

}

window.addEventListener("scroll", runCounters);

runCounters();


/* =====================================================
        ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop &&
      pageYOffset < sectionTop + sectionHeight) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});


/* =====================================================
        CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const success = document.getElementById("sentOk");
    const fail = document.getElementById("sentFail");

    fetch(contactForm.action, {

      method: "POST",

      body: new FormData(contactForm),

      headers: {

        Accept: "application/json"

      }

    })

      .then(response => {

        if (response.ok) {

          success.classList.remove("d-none");

          fail.classList.add("d-none");

          contactForm.reset();

          setTimeout(() => {

            success.classList.add("d-none");

          }, 4000);

        }

        else {

          success.classList.add("d-none");

          fail.classList.remove("d-none");

        }

      })

      .catch(() => {

        success.classList.add("d-none");

        fail.classList.remove("d-none");

      });

  });

}


/* =====================================================
        IMAGE HOVER EFFECT
===================================================== */

document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-12px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

  });

});


/* =====================================================
        CURRENT YEAR
===================================================== */

const footer = document.querySelector("footer p");

if (footer) {

  footer.innerHTML =

    `© ${new Date().getFullYear()} Ogagaoghene Iduku |
Designed with ❤️ using HTML, CSS, JavaScript & Bootstrap5`;

}


/* =====================================================
        PRELOADER (OPTIONAL)
===================================================== */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});


/* =====================================================
        RANDOM CODING QUOTES
===================================================== */

const quotes = [

  "Code. Learn. Build. Repeat.",

  "Every expert was once a beginner.",

  "Dream big, code bigger.",

  "Programming is the art of solving problems.",

  "Small projects lead to big opportunities."

];

const quoteElement = document.getElementById("quote");

if (quoteElement) {

  quoteElement.innerText =

    quotes[Math.floor(Math.random() * quotes.length)];

}


/* =====================================================
        KEYBOARD SHORTCUT
===================================================== */

document.addEventListener("keydown", (event) => {

  if (event.key === "d") {

    document.body.classList.toggle("dark");

  }

});


/* =====================================================
        WELCOME MESSAGE
===================================================== */

setTimeout(() => {

  console.log("👋 Welcome to the Future Developer Portfolio!");

}, 1000);


/* =====================================================
        END OF SCRIPT.JS
===================================================== */