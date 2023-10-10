const navToggle = document.querySelector(".header__nav-iconmenu")
const navMenu = document.querySelector(".header__nav-ul")


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})