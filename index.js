console.log("JS working");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// tab moving searchbar 

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".tab-indicator");

function moveIndicator(tab) {
    indicator.style.width = tab.offsetWidth + "px";
    indicator.style.left = tab.offsetLeft + "px";
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");
        moveIndicator(tab);
    });
});

window.onload = () => {
    moveIndicator(document.querySelector(".tab.active"));
};


// OWL 
$(document).ready(function(){
  $(".areas-carousel").owlCarousel({
      loop: true,
      margin: 40,
      center: true,
      nav: true,
      dots: false,
      autoplay: false,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:1.2
          },
          1200:{
              items:1.5
          }
      }
  });
});

// hotsspot
$(".hotspots-carousel").owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds
    autoplayHoverPause: false,
    slideBy: 4, // moves 4 at a time
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1,
            slideBy: 1
        },
        768: {
            items: 2,
            slideBy: 2
        },
        1200: {
            items: 4,
            slideBy: 4
        }
    }
});