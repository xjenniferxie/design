// Mobile navigation

var navBar = document.getElementById("navbar")

if (matchMedia) {
    var mediaQuery600 = window.matchMedia("(max-width: 600px)")
    lessThan600px(mediaQuery600)
    mediaQuery600.addListener(lessThan600px)
}

// When width of viewport less than 600px
function lessThan600px(mediaQuery) {
    if (mediaQuery.matches) {
        var menu = document.getElementsByClassName("fa-bars")[0]
        menu.addEventListener("click", mobileNavigation)

        var navLinks = document.getElementsByClassName("nav-link")
        var i
        for (i = 0; i < navLinks.length; i++) {
        	navLinks[i].addEventListener("click", mobileNavLinkClicked)
        }
    } else {
        navBar.classList.remove("active")
    }
}

// Makes changes for mobile navigation
function mobileNavigation() {
    if (navBar.classList.contains("active")) {
        navBar.classList.remove("active")
    } else {
        navBar.classList.add("active")
    }
}

// Close mobile navigation bar once link clicked
function mobileNavLinkClicked() {
    if (navBar.classList.contains("active")) {
        navBar.classList.remove("active")
    }
}