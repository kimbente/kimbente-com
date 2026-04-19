/* loader symbol */
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class loader hidden
});

/* NAVIGATION hamburger */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* NAVIGATION hide */
document.addEventListener("scroll", function () {
  lastKnownScrollPosition = window.scrollY;
  var navbar = document.getElementById("myTopnav");
  if (lastKnownScrollPosition > (window.innerHeight) * 0.9) {
    navbar.classList.add("hide-navbar")
  } else {
    navbar.classList.remove("hide-navbar");
  }
});

/* NAVIGATION blurry */
window.addEventListener("scroll", function () {
  const topnav = document.querySelector(".topnav");
  if (window.scrollY > window.innerHeight * 0.88) {  // after first view
    topnav.classList.add("blurry");
  } else {
    topnav.classList.remove("blurry");
  }
});