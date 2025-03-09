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


// // pagination(dots)
//   const swiper = new Swiper('.mySwiper', {
//     loop: true,
//     autoplay: {
//       delay: 5000, // 5 seconds
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });