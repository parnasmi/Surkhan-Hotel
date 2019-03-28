(function() {
	
	/*---------Mobile hamburger menu
	============================================*/
	(function(){
		$('.page-header__menu-btn, .sidebar-overlay').on('click', function(e){
			e.preventDefault();

			$('.hamburger').toggleClass('opened');
			$('.sidebar').toggleClass('is-open');
			$('html').toggleClass('freeze');
			$('body').toggleClass('freeze');
			return false;
		});
	})();
})();


	/*---------Main Slider
	============================================*/

(function(){

	$(".main-slider_js").slick({
		infinite: false,
		// autoplay:true,
		prevArrow:"<button type='button' class='slick-prev'><svg width='9' height='15' xmlns='http://www.w3.org/2000/svg'><path d='M2.072 7.5L8.75 1.35a.747.747 0 0 0 0-1.118.911.911 0 0 0-1.214 0L.25 6.94a.747.747 0 0 0 0 1.118l7.284 6.71a.911.911 0 0 0 1.214 0 .747.747 0 0 0 0-1.119L2.072 7.5z' fill='#000' fill-rule='evenodd'/></svg></button>",
		nextArrow:"<button type='button' class='slick-next'><svg width='9' height='15' xmlns='http://www.w3.org/2000/svg'><path d='M6.928 7.5L.25 1.35a.747.747 0 0 1 0-1.118.911.911 0 0 1 1.214 0L8.75 6.94a.747.747 0 0 1 0 1.118l-7.284 6.71a.911.911 0 0 1-1.214 0 .747.747 0 0 1 0-1.119L6.928 7.5z' fill='#000' fill-rule='evenodd'/></svg></button>",
		dots: true,
		lazyLoad: 'ondemand',
		row: 0,
		// adaptiveHeight: true,
		responsive: [{

			breakpoint: 1366,
			settings: {
				arrows: true,
			}

		}, {

			breakpoint: 1280,
			settings: {
				dots: true,
				arrows: false
			}
			}, {

			breakpoint: 300,
			settings: {

			}

		}]
	});
})();


	/*---------Rooms Slider
	============================================*/

(function(){
	
	$('.rooms__display_js').each(function(key, item) {

		var sliderIdName = 'slider' + key;
		var sliderNavIdName = 'sliderNav' + key;

		this.id = sliderIdName;
		$('.rooms__thumbs_js')[key].id = sliderNavIdName;

		var sliderId = '#' + sliderIdName;
		var sliderNavId = '#' + sliderNavIdName;



		$(sliderId).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: sliderNavId,
			rows: 0,
			lazyLoad: 'ondemand',
			prevArrow:"<button type='button' class='slick-prev'><svg width='9' height='15' xmlns='http://www.w3.org/2000/svg'><path d='M2.072 7.5L8.75 1.35a.747.747 0 0 0 0-1.118.911.911 0 0 0-1.214 0L.25 6.94a.747.747 0 0 0 0 1.118l7.284 6.71a.911.911 0 0 0 1.214 0 .747.747 0 0 0 0-1.119L2.072 7.5z' fill='#000' fill-rule='evenodd'/></svg></button>",
			nextArrow:"<button type='button' class='slick-next'><svg width='9' height='15' xmlns='http://www.w3.org/2000/svg'><path d='M6.928 7.5L.25 1.35a.747.747 0 0 1 0-1.118.911.911 0 0 1 1.214 0L8.75 6.94a.747.747 0 0 1 0 1.118l-7.284 6.71a.911.911 0 0 1-1.214 0 .747.747 0 0 1 0-1.119L6.928 7.5z' fill='#000' fill-rule='evenodd'/></svg></button>",
			responsive: [{

					breakpoint: 1365,
					settings: {
						arrows: false,
						dots: false
					}

				}, {

					breakpoint: 767,
					settings: {
						dots: true,
						arrows: false
					}
					}, {

					breakpoint: 300,
					settings: {

					}

			}]
		});
		$(sliderNavId).slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: sliderId,
			arrows: true,
			focusOnSelect: true,
			vertical: true,
			rows: 0,
			infinite: false,
			lazyLoad: 'ondemand',
			prevArrow:"<button type='button' class='slick-prev'><svg width='8' height='5' xmlns='http://www.w3.org/2000/svg'><path d='M4.195 1.474l3 3.257c.15.164.395.164.546 0a.444.444 0 0 0 0-.592L4.468.586a.365.365 0 0 0-.546 0L.65 4.14a.444.444 0 0 0 0 .592c.15.164.394.164.545 0l3-3.257z' fill='#000' fill-rule='evenodd'/></svg></button>",
			nextArrow:"<button type='button' class='slick-next'><svg width='8' height='5' xmlns='http://www.w3.org/2000/svg'><path d='M4.195 3.955l3-3.365a.357.357 0 0 1 .546 0 .47.47 0 0 1 0 .612L4.468 4.873a.357.357 0 0 1-.546 0L.65 1.202a.47.47 0 0 1 0-.612.357.357 0 0 1 .545 0l3 3.365z' fill='#000' fill-rule='evenodd'/></svg></button>",
			responsive: [{

					breakpoint: 1365,
					settings: {
						// infinite: false,
						prevArrow:"<button type='button' class='slick-prev'><svg width='9' height='15' xmlns='http://www.w3.org/2000/svg'><path d='M2.072 7.5L8.75 1.35a.747.747 0 0 0 0-1.118.911.911 0 0 0-1.214 0L.25 6.94a.747.747 0 0 0 0 1.118l7.284 6.71a.911.911 0 0 0 1.214 0 .747.747 0 0 0 0-1.119L2.072 7.5z' fill='#000' fill-rule='evenodd'/></svg></button>",
						nextArrow:"<button type='button' class='slick-next'><svg width='9' height='15' xmlns='http://www.w3.org/2000/svg'><path d='M6.928 7.5L.25 1.35a.747.747 0 0 1 0-1.118.911.911 0 0 1 1.214 0L8.75 6.94a.747.747 0 0 1 0 1.118l-7.284 6.71a.911.911 0 0 1-1.214 0 .747.747 0 0 1 0-1.119L6.928 7.5z' fill='#000' fill-rule='evenodd'/></svg></button>",
						dots: false,
						vertical: false,
						slidesToShow: 4,
						arrows: false
					}

				}, {

					breakpoint: 767,
					settings: {
						dots: true,
						arrows: false
					}
					}, {

					breakpoint: 300,
					settings: {

					}
			}]
		});

	});//each

	// On before slide change
$('.rooms__thumbs_js').on('lazyLoaded', function(event, slick, currentSlide, nextSlide){
	$('.rooms__thumbs_js').addClass('is-loaded');
});

})();
	/*---------Datepicker
	============================================*/
(function(){
	var datePicker = $('.input_date').datepicker({
			showOtherMonths: true,
			selectOtherMonths: true,
			constrainInput: false,
			dateFormat: 'dd/mm/yy',
			orientation: "top",
			// beforeShow: function() {
			// 	$('.reserve__form').addClass('show-bg');
			// },
			onClose: function() {
				$('.reserve__form').removeClass('show-bg');
			},
			beforeShow: function (input, inst) {
				if($('.reserve__form').length) {
					$('.reserve__form').addClass('show-bg');
							setTimeout(function () {
									inst.dpDiv.css({
											top: $(input).offset().top + 80,
											left: $(input).offset().left
									});
							}, 0);
					}
				}
				
		});

		$(window).on('recize', function(){
			datePicker.datepicker('hide');
			$('.input_date').blur();
		});
		// 	$(window).scroll(function(){
		// 	datePicker.datepicker('hide');
		// 	$('.input_date').blur();
		// });
	})();


	/*--------- Lightbox
	============================================*/
	(function(){
		$('.slider-display_magnific').on('click', '.slider-item_magnific' ,function(e) {
			var thisImage = $(this),
				startIndex = 0,//Determining which image was pressed
				productImage = thisImage.closest('.slider-display_magnific').find('.slider-item_magnific'),
				collection = [];//creating collection of JSON objects to pass for Magnific Popup
			
			if (productImage.length) {
				productImage.each(function (index, value) {
					if ($(this).find('img').attr('src') == thisImage.find('img').attr('src') || $(this).find('img').data('lazy') == thisImage.find('img').attr('src')) {
						startIndex = index;
					}
					collection.push({ 'src': $(this).find('img').attr('src') || $(this).find('img').data('lazy') });
				});
			}
				$.magnificPopup.open({
					items: collection,
					type: 'image',
					gallery: {
						enabled: true,
						preload: [0, 2],
					},
					closeBtnInside: true,
					mainClass: 'mfp-fade',
					callbacks: {
						beforeOpen: function() {
							this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
							this.st.mainClass = 'mfp-zoom-in';
						},
						close: function() {
							
						}
					}
				}, startIndex);
			});
	})();

/* Styling checkboxes and radio
	=================================*/
	(function(){
		$('.booking__checkbox,.booking__radio').stylizeInput();
	})();


/*---------Photo Gallery Slider
	============================================*/

(function(){
		var photoSlider = $('.gallery__slider-photo_js');
		var thumbSlider = $('.gallery__slider-thumbs_js');
		photoSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: thumbSlider,
			rows: 0,
			lazyLoad: 'ondemand',
			prevArrow:"<button type='button' class='slick-prev'><svg width='9' height='15' xmlns='http://www.w3.org/2000/svg'><path d='M2.072 7.5L8.75 1.35a.747.747 0 0 0 0-1.118.911.911 0 0 0-1.214 0L.25 6.94a.747.747 0 0 0 0 1.118l7.284 6.71a.911.911 0 0 0 1.214 0 .747.747 0 0 0 0-1.119L2.072 7.5z' fill='#000' fill-rule='evenodd'/></svg></button>",
			nextArrow:"<button type='button' class='slick-next'><svg width='9' height='15' xmlns='http://www.w3.org/2000/svg'><path d='M6.928 7.5L.25 1.35a.747.747 0 0 1 0-1.118.911.911 0 0 1 1.214 0L8.75 6.94a.747.747 0 0 1 0 1.118l-7.284 6.71a.911.911 0 0 1-1.214 0 .747.747 0 0 1 0-1.119L6.928 7.5z' fill='#000' fill-rule='evenodd'/></svg></button>",
			responsive: [{

					breakpoint: 767,
					settings: {
						dots: true,
						arrows: false
					}
			}]
		});
		thumbSlider.slick({
			slidesToShow: 20,
			slidesToScroll: 1,
			asNavFor: photoSlider,
			arrows: false,
			focusOnSelect: true,
			rows: 0,
			infinite: false,
			lazyLoad: 'ondemand'
		});

	// On before slide change
thumbSlider.on('lazyLoaded', function(event, slick, currentSlide, nextSlide){
	thumbSlider.addClass('is-loaded');
});

})();



/* Reseting rating inputs
=================================*/
(function(){
	$('.rate-it__clear').on('click', function(e){
		e.preventDefault();
		$('.rating-inputs input[name="rating"]').prop('checked', false);
	});
	
})();

/* Reseting rating inputs
=================================*/
$('.booking__breakfast').on('click', function () {
		$('.booking__gallery').magnificPopup('open');
});

$('.booking__gallery').each(function () {
		$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
						enabled: true,
						navigateByImgClick: true
				},
				fixedContentPos: false
		});
});
/* Show more feedbacks
=================================*/
$(function () {
		$(".fdb-page__item").slice(0, 3).show();
		$(".fdb-page__show-more").on('click', function (e) {
			e.preventDefault();
			$(".fdb-page__item:hidden").slice(0, 3).slideDown();
			if ($(".fdb-page__item:hidden").length === 0) {
					// $(".fdb-page__show-more").fadeOut('slow');//Удалить кнопку если больше нет отзывов.
			}
			$('html,body').animate({
					scrollTop: $(this).offset().top - 50
			}, 1500);
		});
});

