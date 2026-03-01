console.log("JS working");
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});


// THHUMB 
 function changeHero(element) {
        const mainImage = document.getElementById("mainHeroImage");

        mainImage.style.opacity = 0;

        setTimeout(() => {
            mainImage.src = element.src;
            mainImage.style.opacity = 1;
        }, 200);
    }