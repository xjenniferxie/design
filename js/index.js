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
