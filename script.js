new WOW().init();
$('.post-wrapper').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay:true,
    autoplaySpeed:4000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        }
      ],
  });