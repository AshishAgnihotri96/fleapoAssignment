document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".navigations .nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove bold-black class from all items
      navItems.forEach((navItem) => {
        navItem.classList.remove("bold-black");
      });

      // Add bold-black class to clicked item
      this.classList.add("bold-black");
    });
  });
});

let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.offsetHeight;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = `-${navbarHeight}px`;
  }
  prevScrollpos = currentScrollPos;
};

let currentIndex = 1; // Start with the middle image
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showSlide() {
  const slideWidth = images[0].clientWidth;
  const offset = -slideWidth * currentIndex;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showSlide();
}

// Call showSlide initially to display the middle image
showSlide();



