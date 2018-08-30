// Change color of navbar on home page when user scrolls
wrapper = document.getElementsByClassName("wrapper")[0]

wrapper.addEventListener('scroll', function() {
	var nav = document.getElementById("navbar")
	if (wrapper.scrollTop <= 20) {
		nav.className = '';
	} else {
		nav.className = 'scroll';
	}
});

// Set height of static sections
var midSection = document.getElementsByClassName("mid")[0]
var workTitle = document.getElementById("work-title")
var smallGrid = document.getElementsByClassName("small-grid")[0]

var midHeight = smallGrid.clientHeight + workTitle.clientHeight
midSection.style.height = midHeight + "px"

window.addEventListener('resize', function() {
	var midHeight = smallGrid.clientHeight + workTitle.clientHeight
	midSection.style.height = midHeight + "px"
});

