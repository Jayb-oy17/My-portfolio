/** @format */
"use scrict";

// TOGGLE SWICTER //
const styleToggle = document.querySelector(".style-switcher-toggler");

styleToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// STYLE HIDER //
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// THEME COLOR //
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
    console.log(setActiveStyle);
  });
}

// MODE SWICHTER //
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-moom");
  dayNight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("light");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-moon");
  } else {
    dayNight.querySelector("i").classList.add("fa-sun");
  }
});

// TYPING ANIMATION //
let typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Editor", "Web Developer", "React App Builder"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// ASIDE //
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let m = 0; m < totalNavList; m++) {
      if (navList[m].querySelector("a").classList.contains("active")) {
        addBackSection(m);
      }
      navList[m].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionToggleBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.add("back-section");
  }
}
{
  function addBackSection(num) {
    allSection[num].classList.add("back-section");
  }
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggle-box"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionToggleBtn();
});
function asideSectionToggleBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// Form Validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const time = document.getElementById("time").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message && time) {
    formMessage.textContent = "Thank you for reaching out!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }
});

// PRELOADER
const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
