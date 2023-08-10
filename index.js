const openButton = document.querySelector(".open-nav")
var nav = document.querySelector(".nav") //! Use const instad of var

// Button toggles the hamburger menu
openButton.addEventListener("click", () => {
   nav.classList.toggle("navigation-open")
})
