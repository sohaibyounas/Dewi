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
  // this.style.color = this.classList.contains('bi-list') ? '#fff' : '#ff4500'; //for icon color changes
});

