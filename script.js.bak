// counter function
function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
}

// Call the function correctly (without "#")
counter("counter1", 0, 232, 500);
counter("counter2", 0, 521, 500);
counter("counter3", 0, 1463, 500);
counter("counter4", 0, 15, 500);

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
window.addEventListener("scroll", function () {
  let header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// icon toggle
document.getElementById("toggle-icon").addEventListener("click", function () {
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
});

// underline on specific menu
document.addEventListener("DOMContentLoaded", function () {
  // Get all sections and nav links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  // Function to handle scroll event
  function handleScroll() {
    let currentSection = "";

    // Loop through each section to find the one in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust for header height or offset
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute("id");
      }
    });

    // Remove active class from all nav links
    navLinks.forEach((link) => {
      link.classList.remove("active");
      // Match the href of the link with the current section
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Initial call to set the active link on page load
  handleScroll();
});

// slider auto-play
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carouselExampleIndicators");
  const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000, // Auto-play every 3 seconds
  });
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
      arrowIcon.classList.replace("bi-arrow-down", "bi-arrow-up");
    } else {
      arrowIcon.classList.replace("bi-arrow-up", "bi-arrow-down");
    }
  });

  scrollBtn.addEventListener("click", function () {
    if (arrowIcon.classList.contains("bi-arrow-up")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  });
});

// Ensure navbar is closed on page load
document.addEventListener("DOMContentLoaded", function () {
  let nav = document.getElementById("smnav");
  nav.style.display = "none"; // Force initial state to closed
});

// Prevent navbar from closing when clicking inside it
let nav = document.getElementById("smnav");
nav.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevents click inside nav from bubbling up
});

// Close navbar if clicking outside, but not on the icon
document.addEventListener("click", function (event) {
  let nav = document.getElementById("smnav");
  let toggleIcon = document.querySelector(".blist");
  if (!nav.contains(event.target) && event.target !== toggleIcon) {
    nav.style.display = "none";
  }
});

// form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // success message element
  let fmessage = document.getElementById("fmessage");

  // error message elements
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let subjectError = document.getElementById("subjectError");
  let messageError = document.getElementById("messageError");

  // Clear all error messages initially
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  subjectError.innerHTML = "";
  messageError.innerHTML = "";

  // Validate name
  if (name === "" || name.length < 8) {
    nameError.innerHTML = "Name must be at least 8 characters";
    return false;
  }

  // Validate email
  let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid email address";
    return false;
  }

  // Validate subject
  if (subject === "" || subject.length < 8) {
    subjectError.innerHTML = "Subject must be at least 8 characters";
    return false;
  }

  // Validate message
  if (message === "" || message.length < 20) {
    messageError.innerHTML = "Message must be at least 20 characters";
    return false;
  }

  // If all validations pass, show the success message
  fmessage.style.display = "block";

  // Auto-hide after 3 seconds
  setTimeout(() => {
    fmessage.style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("myform").reset();
  return false; // Prevent actual form submission
}
