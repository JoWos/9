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

//WYKRES
var ctx = document.getElementById('myChart').getContext('2d');

Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        max: 600
    }
});
var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 352, 200, 220, 400, 350, 400, 372, 309, 321, 388 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 406, 172, 301, 280, 447, 111, 150, 244, 463, 326 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 159, 249, 168, 390, 267, 141, 213, 238, 248, 148 ],
            // 7
            hidden: true,
        }]
    },
}); 