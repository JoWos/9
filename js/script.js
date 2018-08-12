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



//MODALS

var showModal = function(event){
	event.preventDefault();		
	var modals = document.querySelectorAll('.modal');
		 
	for (var i = 0; i < modals.length; i++) {
		modals[i].classList.remove('show');
}

	var href = this.getAttribute('href');
	document.querySelector(href).classList.add('show')
	document.querySelector('#modal-overlay').classList.add('show');
};

//przypisanie funkcji otwierającej do guzików
var modalLinks = document.querySelectorAll('.show-modal');
for(var i = 0; i < modalLinks.length; i++){
	modalLinks[i].addEventListener('click', showModal);
}
	
//ZAMYKANIE MODALA
var hideModal = function(event){
	event.preventDefault();
	document.querySelector('#modal-overlay').classList.remove('show');
};

//przypisanie funkcji zamykającej do guzików
var closeButtons = document.querySelectorAll('.modal .close');
for(var i = 0; i < closeButtons.length; i++){
	closeButtons[i].addEventListener('click', hideModal);
}


document.querySelector('#modal-overlay').addEventListener('click', hideModal);
//uniemożliwienie zamykania modala poprzez kliknięcie w samego modala
var modals = document.querySelectorAll('.modal');

for(var i = 0; i < modals.length; i++){
	modals[i].addEventListener('click', function(event){
		event.stopPropagation();
	});
}

