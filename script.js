const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('menu-open');
  menu.classList.toggle('menu-open');
});
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    var documentHeight = document.documentElement.scrollHeight;
    var visibleHeight = window.innerHeight;
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var scrollPercentage = (scrollPosition / (documentHeight - visibleHeight)) * 100;
    if (scrollPercentage > 60) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var scrollUpButton = document.getElementById("scrollUpButton");

  window.addEventListener("scroll", function () {
    var documentHeight = document.documentElement.scrollHeight;
    var visibleHeight = window.innerHeight;
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var scrollPercentage = (scrollPosition / (documentHeight - visibleHeight)) * 100;
    if (scrollPercentage > 60) {
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }
  });

  scrollUpButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});