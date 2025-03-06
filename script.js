// icon click sm nav show/hide
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


// // play button animation
// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(".animate-on-scroll");

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active");
//         observer.unobserve(entry.target); // Stop observing after animation
//       }
//     });
//   }, {
//     threshold: 0.5 // Trigger when 50% of the element is visible
//   });

//   elements.forEach(element => observer.observe(element));
// });