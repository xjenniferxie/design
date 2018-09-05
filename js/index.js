// Change color of navbar on home page when user scrolls
var wrapper = document.getElementsByClassName("wrapper")[0]
var nav = document.getElementById("navbar")
nav.classList.add("transparent-nav")

wrapper.addEventListener('scroll', function() {
	if (wrapper.scrollTop <= 40) {
		nav.classList.add("transparent-nav")
	} else {
		nav.classList.remove("transparent-nav")
	}
});

// Set height of sections

// Work
var midSection = document.getElementsByClassName("mid")[0]
var workTitle = document.getElementById("work-title")
var smallGrid = document.getElementsByClassName("small-grid")[0]

// Contact
var endSection = document.getElementsByClassName("end")[0]
var contactTitle = document.getElementById("contact-title")
var contactGrid = document.getElementsByClassName("contact-grid")[0]

function setHeights() {
	var midHeight = smallGrid.clientHeight + workTitle.clientHeight
	midSection.style.height = midHeight + "px"

	var endHeight = contactGrid.clientHeight + contactTitle.clientHeight
	endSection.style.height = endHeight + "px"
}

// Set height when window loaded
window.addEventListener("load", setHeights());

// Recalculate height of sections when window resized
window.addEventListener('resize', setHeights());