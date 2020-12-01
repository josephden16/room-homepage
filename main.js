let nav = document.querySelector(".nav");
let navLinks = document.querySelector(".nav__links");

let hamburger = document.querySelector(".hamburger");
let closeMenu = document.querySelector(".close");


function openNav() {
  navLinks.classList.add("nav__links-open");
  nav.classList.add("nav-open");
}

function closeNav() {
  navLinks.classList.remove("nav__links-open");
  nav.classList.remove("nav-open");
}

hamburger.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);

let introOne = document.getElementById("intro-one");
let introTwo = document.getElementById("intro-two");
let introThree = document.getElementById("intro-three");

let imageOne = document.getElementById("image-one");
let imageTwo = document.getElementById("image-two");
let imageThree = document.getElementById("image-three");

var counter = 1;

let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

previousButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);

function nextImage() {
  counter++

  if (counter > 3) {
    counter = 3;
    return;
  }

  if (counter === 1) {
    introOne.classList.add("active-content");
    introTwo.classList.remove("active-content");
    introThree.classList.remove("active-content");

    imageOne.classList.add("active");
    imageTwo.classList.remove("active");
    imageThree.classList.remove("active");
  } else if (counter === 2) {
    introOne.classList.remove("active-content");
    introTwo.classList.add("active-content");
    introThree.classList.remove("active-content");

    imageOne.classList.remove("active");
    imageTwo.classList.add("active");
    imageThree.classList.remove("active");
  } else if (counter === 3) {
    introOne.classList.remove("active-content");
    introTwo.classList.remove("active-content");
    introThree.classList.add("active-content");

    imageOne.classList.remove("active");
    imageTwo.classList.remove("active");
    imageThree.classList.add("active");
  }
}

function previousImage() {
  counter--;

  if (counter < 1) {
    counter = 1;
    return;
  }

  if (counter === 1) {
    introOne.classList.add("active-content");
    introTwo.classList.remove("active-content");
    introThree.classList.remove("active-content");

    imageOne.classList.add("active");
    imageTwo.classList.remove("active");
    imageThree.classList.remove("active");

  } else if (counter === 2) {
    introOne.classList.remove("active-content");
    introTwo.classList.add("active-content");
    introThree.classList.remove("active-content");

    imageOne.classList.remove("active");
    imageTwo.classList.add("active");
    imageThree.classList.remove("active");
  } else if (counter === 3) {
    counter = 1;
    introOne.classList.remove("active-content");
    introTwo.classList.remove("active-content");
    introThree.classList.add("active-content");

    imageOne.classList.remove("active");
    imageTwo.classList.remove("active");
    imageThree.classList.add("active");
  }
}
