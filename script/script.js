let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist'); 

menu.onclick = () => { 
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr =  ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{ delay:200, origin:'top'});
sr.reveal('.hero-img',{ delay:200, origin:'top'});
sr.reveal('.icons',{ delay:200, origin:'left'});
sr.reveal('.about1',{ delay:300, origin:'top'});
sr.reveal('.about2',{ delay:200, origin:'top'});
sr.reveal('.service-txt',{ delay:200, origin:'top'});


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    let isScrolled = false;
  
    function handleScroll() {
      if (window.scrollY > 0 && !isScrolled) {
        navbar.classList.add('navbar-scrolled');
        isScrolled = true;
      } else if (window.scrollY === 0 && isScrolled) {
        navbar.classList.remove('navbar-scrolled');
        isScrolled = false;
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  