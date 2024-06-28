let menuOpen = false;
const menuBtn = document.querySelector(".menu-icon-btn");
const menu = document.getElementById("menu-list");
const handleMenuBtn = () => {
  if (menuOpen) {
    menuOpen = false;
    menu.style.display = "none";
    menuBtn.innerHTML = `<i class="ri-menu-3-line"></i>`;
  } else {
    menuOpen = true;
    menu.style.display = "block";
    menuBtn.innerHTML = `<i class="ri-close-line"></i>`;
  }
};

const navLinks = document.querySelectorAll(".nav ul li a");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    for (let i = 0; i < navLinks.length; i++) {
      if (i === index) {
        navLinks[i].classList.add("active");
      } else {
        navLinks[i].classList.remove("active");
      }
    }
  });
});

const menuLinks = document.querySelectorAll("#menu-list ul li a");
menuLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    for (let i = 0; i < menuLinks.length; i++) {
      if (i === index) {
        menuLinks[i].classList.add("active-menu");
      } else {
        menuLinks[i].classList.remove("active-menu");
      }
    }
  });
});

var typed = new Typed("#name", {
  strings: ["Gautam Kamlesh Yadav"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
});

function send() {
  let typedText = "gautam yadav";
  window.location.href =
    "https://api.whatsapp.com/send?phone=916306746339?text=" + typedText;
}
