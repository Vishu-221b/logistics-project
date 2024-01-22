'use strict';


/**
 * Navbar Toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

// Toggle the navigation menu and header-contact div on navToggler click
for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    // Toggle the "active" class for the header-contact div
    document.querySelector(".header-contact").classList.toggle("active");
  });
}

// Handle the click event for navLinks
document.querySelectorAll("[data-nav-link]").forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    // Remove the "active" class for the header-contact div
    document.querySelector(".header-contact").classList.remove("active");
  });
});

/**
 * Header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

// Add "active" class to header and backTopBtn on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/*testimonial*/ 

const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Nishant Sinha',
        position: 'Customer',
        photo: 'https://i.pinimg.com/564x/a2/f6/48/a2f648e5117d7aaeabd8a448fe78b2fd.jpg',
        text: 'Overall satisfied with the service. The staff was very cooperative and professional. They packed and moved my stuff with care. I would recommend 3R Packers and Movers to everyone.'
    },
    
]

let idx = 1

function upadteTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(upadteTestimonial, 10000)