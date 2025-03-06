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


// nav bg-color on scroll 
window.onscroll = function() {
    let mheader = document.getElementById("main-header");
    if (window.scrollY > 10){
        header.classList.add('scrolled')
    }else{
        header.classList.remove('scrolled')
    };
};