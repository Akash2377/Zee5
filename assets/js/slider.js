let slideContainer = document.querySelector(".containerSlider");
let slide = document.querySelector(".slides");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let slides = document.querySelectorAll(".slide");
const interval = 2000;
let index = 1;
let slideId;
let firstClone = slides[0].cloneNode(true);
let lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = "first-clone";
lastClone.id = "last-clone";
slide.append(firstClone);
slide.prepend(lastClone);
let slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;
const startSlide = () => {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};
slide.addEventListener("transitionend", () => {
  slides = document.querySelectorAll(".slide");
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});
slideContainer.addEventListener("mouseenter", () => {
  nextBtn.style.display = "block";
  prevBtn.style.display = "block";
  clearInterval(slideId);
});
const moveToNextSlide = () => {
  slides = document.querySelectorAll(".slide");
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = "0.7s";
};
const moveToPrevSlide = () => {
  slides = document.querySelectorAll(".slide");
  if (index <= 0) return;
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = "0.7s";
};
slideContainer.addEventListener("mouseleave", startSlide);
nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);
startSlide();
function saveToLocalPlay(nameOfVideo) {
  localStorage.setItem("PlayYoutube", nameOfVideo);
  window.open("./playvideo.html", "_self");
}
