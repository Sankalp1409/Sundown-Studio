const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var fixedImage = document.querySelector("#fixed-image");
var elemContainer = document.querySelector("#elem-container");
var overlay = document.querySelector(".overlay");
elemContainer.addEventListener("mouseenter", function () {
  fixedImage.style.display = "inline-block";
});
fixedImage.addEventListener("mouseenter", function (e) {
  fixedImage.style.display = "inline-block";
});
elemContainer.addEventListener("mouseleave", function () {
  fixedImage.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var img = elem.getAttribute("data-image");
    fixedImage.style.backgroundImage = `url(${img})`;
  });
});

var check = 1;
var design = document.querySelector("#design");
var designBefore = document.querySelector("#vertical1");
var project = document.querySelector("#project");
var projectBefore = document.querySelector("#vertical2");
var execution = document.querySelector("#execution");
var executionBefore = document.querySelector("#vertical3");

var rightImage = document.querySelector("#page-right img");
var leftPara = document.querySelector("#page-left p");
design.addEventListener("click", function (e) {
  design.style.color = "white";
  designBefore.style.borderLeft = "2px solid #fe330a";
  project.style.color = "#504a45";
  projectBefore.style.borderLeft = "2px solid #504a45";
  execution.style.color = "#504a45";
  executionBefore.style.borderLeft = "2px solid #504a45";
  rightImage.setAttribute("src", design.getAttribute("image"));
  leftPara.innerHTML = design.getAttribute("data");
});

project.addEventListener("click", function (e) {
  design.style.color = "#504a45";
  designBefore.style.borderLeft = "2px solid #504a45";
  project.style.color = "white";
  projectBefore.style.borderLeft = "2px solid #fe330a";
  execution.style.color = "#504a45";
  executionBefore.style.borderLeft = "2px solid #504a45";
  rightImage.setAttribute("src", project.getAttribute("image"));
  leftPara.innerHTML = project.getAttribute("data");
});

execution.addEventListener("click", function (e) {
  design.style.color = "#504a45";
  designBefore.style.borderLeft = "2px solid #504a45";
  project.style.color = "#504a45";
  projectBefore.style.borderLeft = "2px solid #504a45";
  execution.style.color = "white";
  executionBefore.style.borderLeft = "2px solid #fe330a";
  rightImage.setAttribute("src", execution.getAttribute("image"));
  leftPara.innerHTML = execution.getAttribute("data");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 60,
});

var sw = document.querySelector("#swiper");
var cursor = document.querySelector("#cursor");
sw.addEventListener("mouseenter", function () {
  sw.addEventListener("mousemove", function (dets) {
    cursor.style.display = "block";
    cursor.style.top = dets.y + "px";
    cursor.style.left = dets.x + "px";
  });
});

sw.addEventListener("mouseout", function (dets) {
  cursor.style.display = "none";
});

var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var navimg = document.querySelector("nav img");
var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = 0;
    navimg.style.opacity = 0;
    flag = 1;
    menu.innerHTML = "X &nbspMenu";
  } else {
    full.style.top = "-100%";
    navimg.style.opacity = 1;
    flag = 0;
    menu.innerHTML = " ☰ &nbspMenu";
  }
});

var loader = document.querySelector("#loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 4000);
