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


// slider auto-play
document.addEventListener("DOMContentLoaded", () => {
  const autoSlide = () => {
    let activeSlide = document.querySelector(".carousel-item.active");
    let nextSlide = activeSlide.nextElementSibling || activeSlide.parentElement.firstElementChild;
    activeSlide.classList.remove("active");
    nextSlide.classList.add("active");
  };

  setInterval(autoSlide, 3000); // Change slide every 3 seconds
});


// scroll up/down arrow
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn");
  const arrowIcon = scrollBtn.querySelector("i");

  window.addEventListener("scroll", function () {
      let scrollHeight = document.documentElement.scrollHeight;
      let scrollTop = window.scrollY;
      let clientHeight = document.documentElement.clientHeight;
      let scrollPosition = scrollTop + clientHeight;

      if (scrollTop > 50) {
          scrollBtn.style.display = "flex"; // Show button
      } else {
          scrollBtn.style.display = "none"; // Hide button
      }

      // Change arrow direction
      if (scrollPosition >= scrollHeight - 50) {
          arrowIcon.classList.replace("bi-arrow-down", "bi-arrow-up"); // Change to Up arrow
      } else {
          arrowIcon.classList.replace("bi-arrow-up", "bi-arrow-down"); // Change to Down arrow
      }
  });

  scrollBtn.addEventListener("click", function () {
      if (arrowIcon.classList.contains("bi-arrow-up")) {
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
      } else {
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); // Scroll to bottom
      }
  });
});


