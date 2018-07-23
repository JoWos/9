document.addEventListener('DOMcontentLoaded', function() {
	document.querySelectorAll('.js-toggle-sidebar').forEach(function(el){
		el.addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector('.siedabar').classList.toggle('open')
		})
	})
})