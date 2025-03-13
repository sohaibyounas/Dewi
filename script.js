// icon click small navbar toggle
function headernav() {
  let nav = document.getElementById("smnav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
  console.log(nav.style.display);
}


// navbar color changes on scroll
window.addEventListener('scroll', function() {
  let header = document.getElementById('main-header');
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// icon toggle 
document.getElementById('toggle-icon').addEventListener('click', function() {
  this.classList.toggle('bi-list');
  this.classList.toggle('bi-x');
});


// underline on specific menu
document.addEventListener('DOMContentLoaded', function () {
  // Get all sections and nav links
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav a');

  // Function to handle scroll event
  function handleScroll() {
      let currentSection = '';

      // Loop through each section to find the one in view
      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100; // Adjust for header height or offset
          const sectionBottom = sectionTop + section.offsetHeight;

          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
              currentSection = section.getAttribute('id');
          }
      });

      // Remove active class from all nav links
      navLinks.forEach(link => {
          link.classList.remove('active');
          // Match the href of the link with the current section
          if (link.getAttribute('href').substring(1) === currentSection) {
              link.classList.add('active');
          }
      });
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial call to set the active link on page load
  handleScroll();
});

