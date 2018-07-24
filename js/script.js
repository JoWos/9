document.addEventListener('DOMcontentLoaded', function() {
	document.querySelectorAll('.js--toggle-sidebar').forEach(function(el){
		el.addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector('.siedabar').classList.toggle('open')
		})
	})
})


var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function() {

	var sidebar = document.getElementById('sidebar');
	sidebar.classList.toggle('sidebar-open');
})

// COLLAPSIBLE WALLET //
var arrow = document.getElementById('wallet-arrow');
arrow.addEventListener('click', function (){

var wallet = document.getElementById('wallet-box');
	wallet.classList.toggle('wallet-collapsed');

var liWallet = document.getElementById('li-wallet');
	liWallet.classList.toggle('li-wallet-collapsed');

})