// mobile navbar
const mobileNavbar = document.querySelector(".mobile-navbar");
const openNavbar = document.querySelector(".open-navbar");
const closeNavbar = document.querySelector(".close-navbar");
openNavbar.addEventListener("click", function () {
  mobileNavbar.classList.add("active");
});
closeNavbar.addEventListener("click", function () {
  mobileNavbar.classList.remove("active");
});

// sticky navbar - mobile
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "-90px";
  } else {
    document.querySelector(".navbar").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};

// click navbar item
function home() {
  const element = document.getElementById("home");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}
function services() {
  const element = document.getElementById("services");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}
function product() {
  const element = document.getElementById("product");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}
function form() {
  const element = document.getElementById("form");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}
function gallery() {
  const element = document.getElementById("gallery");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}
