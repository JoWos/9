/*document.addEventListener('DOMcontentLoaded', function() {
	document.querySelectorAll('.js--toggle-sidebar').forEach(function(el){
		el.addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector('.siedabar').classList.toggle('open')
		})
	})
})*/
// SIDEBAR - OPEN/CLOSE
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.js--toggle-sidebar').forEach(function(el) {
      el.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.sidebar').classList.toggle('sidebar-open');
      })
    });
  });


// COLLAPSIBLE WALLET //
/*var arrow = document.getElementById('wallet-arrow');
arrow.addEventListener('click', function (){

var wallet = document.getElementById('wallet-box');
	wallet.classList.toggle('wallet-collapsed');

var liWallet = document.getElementById('li-wallet');
	liWallet.classList.toggle('li-wallet-collapsed');

})*/


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