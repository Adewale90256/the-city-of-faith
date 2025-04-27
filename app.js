"use strict";
const subListElement = document.getElementById("subList");
const showSubListBtn = document.getElementById("showSubList");
showSubListBtn.addEventListener("click", () => {
  if (subListElement.classList.contains("hidden")) {
    subListElement.classList.remove("hidden");
  } else {
    subListElement.classList.add("hidden");
  }
});

const menuList = document.getElementById("showlistOnSmallScreen");
const menuBtn = document.getElementById("clickToShowMenu");
menuBtn.addEventListener("click", () => {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.remove("hidden");
  }
});

const smScreensubListElement = document.getElementById("smScreensubList");
const smScreenshowSubListBtn = document.getElementById("smScreenshowSubList");
smScreenshowSubListBtn.addEventListener("click", () => {
  if (smScreensubListElement.classList.contains("hidden")) {
    smScreensubListElement.classList.remove("hidden");
  } else {
    smScreensubListElement.classList.add("hidden");
  }
});

const HideBtn = document.getElementById("clickToHide");
HideBtn.addEventListener("click", () => {
  if (!menuList.classList.contains("hidden")) {
    menuList.classList.add("hidden");
  }
});

const images = [
  "./bg-images/bg-1.jpg",
  "./bg-images/bg-2.jpg",
  "./bg-images/bg-3.jpg",
  "./bg-images/bg-4.webp",
  "./bg-images/bg-5.webp",
  "./bg-images/bg-6.jpg",
  "./bg-images/bg-7.webp",
  "./bg-images/bg-8.jpeg",
  "./bg-images/bg-9.avif",
  "./bg-images/bg-10.jpg",
];

let current = 0;
const sliderDiv = document.getElementById("background-slider");

function changeBackground() {
  // Move slider offscreen to the left and fade out
  sliderDiv.classList.add("-translate-x-full", "opacity-0");

  setTimeout(() => {
    // Update the background image after moving out
    current = (current + 1) % images.length;
    sliderDiv.style.backgroundImage = `url(${images[current]})`;

    // Instantly move the slider to the right without transition
    sliderDiv.classList.remove("transition-all", "duration-1000");
    sliderDiv.classList.remove("-translate-x-full");
    sliderDiv.classList.add("translate-x-full");

    // Force reflow so browser notices the instant jump
    void sliderDiv.offsetWidth;

    // Add transition back and slide to center
    sliderDiv.classList.add("transition-all", "duration-1000");
    sliderDiv.classList.remove("translate-x-full", "opacity-0");
  }, 1000); // Wait for slide-out animation to finish
}

setInterval(changeBackground, 4000); // Every 4 seconds

// Initialize with first background
sliderDiv.style.backgroundImage = `url(${images[current]})`;

let currentBibleText = 0;
const bibleTextSlider = document.getElementById("bibleTextSlider");
const text = [
  "I AM WHO I AM BY THE GRACE OF GOD.",
  "I CAN DO ALL THINGS THROUGH CHRIST THAT STRENGHTENED ME.",
  "GOD IS OUR REFUGE AND FOREST A VERY PRESENT HELP IN TIME OF TROUBLE.",
  "I WILL SUPPLY YOUR NEEDS ACCORDING TO MY RICHES IN GLORY.",
  "HE SHALL BE LIKE A TREE PLANTED BY THE RIVERS OF WATERS.",
  "IN THE BIGINNING WAS THE WORD, AND THE WORD WAS WITH GOD, AND THE WORD WAS GOD.",
  "BY STRENGHT SHALL NO MAN PREVAIL.",
  "THOSE THAT WAIT UPON THE LORD, THEY SHALL RENEW THIER STRENGHT, THEY WILL MOUNT UP WITH WINGS LIKE AN EAGLE, THYE WILL RUN AND NOT BE TIRED AND THEY WILL WALK AND NOT BE WEARY.",
];

function changeBibleText() {
  bibleTextSlider.classList.add("-translate-x-full", "opacity-0");

  setTimeout(() => {
    bibleTextSlider.innerHTML = text[currentBibleText];
    currentBibleText = (currentBibleText + 1) % text.length;

    bibleTextSlider.classList.remove("transition-all", "duration-1000");
    bibleTextSlider.classList.remove("-translate-x-full");
    bibleTextSlider.classList.add("translate-x-full");

    void bibleTextSlider.offsetWidth;

    bibleTextSlider.classList.add("transition-all", "duration-1000");
    bibleTextSlider.classList.remove("translate-x-full", "opacity-0");
  }, 1000);
}

setInterval(changeBibleText, 4000);
console.log(text);
