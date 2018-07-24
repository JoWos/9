document.addEventListener('DOMcontentLoaded', function() {
	document.querySelectorAll('.js--toggle-sidebar').forEach(function(el){
		el.addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector('.siedabar').classList.toggle('open')
		})
	})
})


var arrow = document.getElementById('wallet-arrow');
arrow.addEventListener('click', function (){

var wallet = document.getElementById('wallet-box');
	wallet.classList.toggle('wallet-collapsed');
})