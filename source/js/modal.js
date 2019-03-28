/* Feedback popups
=================================*/
(function(){
	$('.fdb-page__head-btn').magnificPopup({
		type:'inline',
		midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		removalDelay: 300,
		mainClass: 'mfp-fade',
		callbacks: {
			open: function() {
				// $('.form').height($('.form__main_f-writer').innerHeight());
			}
		}
	});

	$('.fdb-form__close-btn, .fdb-form__success-btn').click(function(){
			$.magnificPopup.close();
			return false
	 });
})();