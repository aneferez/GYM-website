const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trainer__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
window.onload = function () { 
  let slides =  
      document.getElementsByClassName('carousel-item'); 

  function addActive(slide) { 
      slide.classList.add('active'); 
  } 

  function removeActive(slide) { 
      slide.classList.remove('active'); 
  } 

  addActive(slides[0]); 
  setInterval(function () { 
      for (let i = 0; i < slides.length; i++) { 
          if (i + 1 == slides.length) { 
              addActive(slides[0]); 
              setTimeout(removeActive, 350, slides[i]); 
              break; 
          } 
          if (slides[i].classList.contains('active')) { 
              setTimeout(removeActive, 350, slides[i]); 
              addActive(slides[i + 1]); 
              break; 
          } 
      } 
  }, 1500); 
  const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(1)
      const y = pointerY.toFixed(1)
      const xp = (pointerX / window.innerWidth).toFixed(2)
      const yp = (pointerY / window.innerHeight).toFixed(2)
      document.documentElement.style.setProperty('--x', x)
      document.documentElement.style.setProperty('--xp', xp)
      document.documentElement.style.setProperty('--y', y)
      document.documentElement.style.setProperty('--yp', yp)
    }
    document.body.addEventListener('pointermove', syncPointer)};