$( document ).ready( function() {

    $('.slick-item').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows:true
    });

    $('.posts-slick').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

} );


$(".testimonials").slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });