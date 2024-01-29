window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(51, 51, 51, 0.4)";
  } else {
    navbar.style.background = "steelblue";
  }
});
 
