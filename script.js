// Smooth scrolling for navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({

      behavior: 'smooth'

    });

  });

});

// Console greeting

window.onload = () => {

  console.log("Welcome to T.Karpagavalli's Portfolio!");

};