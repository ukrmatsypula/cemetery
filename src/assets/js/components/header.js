$(function () {
  let header = $("#header");
  let headerHeight = header.innerHeight();
  let intro = $("#intro");
  let introHeight = intro.innerHeight();
  let scrollTop = $(window).scrollTop();

  changeHeaderColor();

  $(window).on("scroll", function () {
    scrollTop = $(header).offset().top;
    changeHeaderColor();
  });

  function changeHeaderColor() {
    if (scrollTop >= headerHeight) {
      header.addClass("header--dark");
    } else {
      header.removeClass("header--dark");
    }
  }

  // ==================scroll smooth=====================

  let links = $("[data-scroll]");
  console.log(window);
  if (!location.pathname.includes("/index.html")) {
  } else {
    links.on("click", function (event) {
      event.preventDefault();

      let scrollElement = $(this).data("scroll");
      let scrollElementPosition = $(scrollElement).offset().top;

      console.log(scrollElementPosition);

      $("html, body").animate(
        {
          scrollTop: scrollElementPosition - headerHeight,
        },
        1000
      );
    });
  }

  // =====================scroll spy===========================
  let windowHeight = $(window).height();
  scrollSpy(scrollTop);
  $(window).on("scroll", function () {
    scrollTop = $(this).scrollTop();
    scrollSpy(scrollTop);
  });

  function scrollSpy() {
    $("[data-scrollspy]").each(function () {
      let $this = $(this);
      let sectionID = $this.data("scrollspy");
      let sectionOffset = $this.offset().top;

      sectionOffset = sectionOffset - (windowHeight * 0.33333 - headerHeight);

      if (scrollTop >= sectionOffset) {
        $(`#nav [data-scroll]`).removeClass("active");

        $(`#nav [data-scroll="${sectionID}"]`).addClass("active");
      } else {
        $(`#nav [data-scroll="${sectionID}"]`).removeClass("active");
      }
    });
  }
});
