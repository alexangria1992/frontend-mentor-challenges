const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamberger button
navToggle.addEventListener("click", () => {
  // if the nav is closed, open it
  const visibility = nav.getAttribute("data-visible");
  // console.log(visibility);
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    // if the nav is open, close it

    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  // console.log(visibility);
  // console.log(navToggle.getAttribute("aria-expanded"));
});
