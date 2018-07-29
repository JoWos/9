'use strict'

// SIDEBAR - OPEN/CLOSE 
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.js--toggle-sidebar').forEach(function(el) {
      el.addEventListener('click', function(event) {
		event.preventDefault();
		var x= window.matchMedia("(min-width: 992px)");
		if(x.matches) {
			document.querySelector('.sidebar').classList.toggle('sidebar-short');	
			document.querySelector('.sidebar').classList.remove('sidebar-open');
			document.querySelector('.logo-wrapper').classList.toggle('logo-wrapper-short');
			document.querySelector('.logo').classList.toggle('logo-short');	
			document.querySelector('.manager').classList.toggle('manager-short');	
			document.querySelector('.main-wrapper').classList.toggle('wide');
			
		} else {
		 document.querySelector('.sidebar').classList.toggle('sidebar-open');
		 document.querySelector('.sidebar').classList.remove('sidebar-short');
		 document.querySelector('.logo-wrapper').classList.remove('logo-wrapper-short');
		 document.querySelector('.logo').classList.remove('logo-short');	
		 document.querySelector('.manager').classList.remove('manager-short');	
		 document.querySelector('.main-wrapper').classList.remove('wide');
		}
      })
    });
  });


//  WALLET - OPEN/CLOSE
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.li-wallet').forEach(function(el) {
      el.addEventListener('click', function(event) {
        event.preventDefault();
		document.querySelector('.wallet').classList.toggle('wallet-collapsed');
		document.querySelector('.icon-arrow-down-small').classList.toggle('hide');
		document.querySelector('.icon-arrow-up-small').classList.toggle('hide');
      })
    });
  });