'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

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
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
    },
    {
        name: 'June Cha',
        position: 'Softwere Engr',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
    },
    {
        name: 'Jhonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
    }
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