'use strict'
// SIDEBAR - OPEN/CLOSE 
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.js--toggle-sidebar').forEach(function(el) {
		el.addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector('.sidebar').classList.toggle('open');
		document.querySelector('.logo-wrapper').classList.toggle('open');
		document.querySelector('.main-wrapper').classList.toggle('wide');
		})
	});
});






//  WALLET - OPEN/CLOSE
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.li-wallet').forEach(function(el) {
		el.addEventListener('click', function(event) {
			event.preventDefault();
	document.querySelector('.wallet').classList.toggle('wallet-collapsed');
	document.querySelector('.li-wallet').classList.toggle('li-wallet-collapsed');
	document.querySelector('.icon-arrow-down-small').classList.toggle('hide');
	document.querySelector('.icon-arrow-up-small').classList.toggle('hide');
		})
	});
});