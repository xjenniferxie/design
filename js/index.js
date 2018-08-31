// Change color of navbar on home page when user scrolls
wrapper = document.getElementsByClassName("wrapper")[0]

wrapper.addEventListener('scroll', function() {
	var nav = document.getElementById("navbar")
	if (wrapper.scrollTop <= 40) {
		nav.classList.remove("scroll")
	} else {
		nav.classList.add("scroll")
	}
});

// Set height of sections

// Work
var midSection = document.getElementsByClassName("mid")[0]
var workTitle = document.getElementById("work-title")
var smallGrid = document.getElementsByClassName("small-grid")[0]
var midHeight = smallGrid.clientHeight + workTitle.clientHeight
midSection.style.height = midHeight + "px"

// Contact
var endSection = document.getElementsByClassName("end")[0]
var contactTitle = document.getElementById("contact-title")
var contactGrid = document.getElementsByClassName("contact-grid")[0]
var endHeight = contactGrid.clientHeight + contactTitle.clientHeight
endSection.style.height = endHeight + "px"

window.addEventListener('resize', function() {
	var midHeight = smallGrid.clientHeight + workTitle.clientHeight
	midSection.style.height = midHeight + "px"

	var endHeight = contactGrid.clientHeight + contactTitle.clientHeight
	endSection.style.height = endHeight + "px"
});