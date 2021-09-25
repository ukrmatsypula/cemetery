//= ../../../../node_modules/slick-carousel/slick/slick.min.js

//intro

const introSlider = $(".intro__slider");
const portfolioSlider = $(".portfolio__slider");

introSlider.slick({
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
});

portfolioSlider.slick({
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 2,
  arrows: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// $(".prev").on("click", function () {
//   portfolioSlider.slick("slickPrev");
// });

// $(".next").on("click", function () {
//   portfolioSlider.slick("slickNext");
// });
