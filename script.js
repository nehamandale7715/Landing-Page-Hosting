$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  fade: true,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

// Slider of life in OasisWeb
$('.slider-nav')
  .on('init', function (event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 9,
    slidesToScroll: 9,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    focusOnSelect: false,
  });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem =
    '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

// Google Map

function initMap() {
  // The location of pune
  const pune = { lat: 18.619893193103174, lng: 73.70923544262611 };
  // The map, centered at pune
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: pune,
  });

  // The marker, positioned at pune 18.619893193103174, 73.70923544262611
  const marker = new google.maps.Marker({
    position: nagpur,
    map: map,
  });
}
