jQuery(window).on("load", function () {
  "use strict";

  // HIDE PRELOADER
  $(".preloader").addClass("hide-preloader");

  // SHOW/ANIMATE ANIMATION CONTAINER
  setTimeout(function () {
    $("#intro .animation-container").each(function () {
      var e = $(this);

      setTimeout(function () {
        e.addClass("run-animation");
      }, e.data("animation-delay"));
    });
  }, 800);
});

jQuery(document).ready(function ($) {
  "use strict";

  $(".navigation-main .navigation-items").onePageNav({
    currentClass: "current",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ":not(.external)",
    easing: "swing",
  });

  $(document).on("click", "a.smooth-scroll", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });

  $(".background-content.parallax-on").parallax({
    scalarX: 24,
    scalarY: 15,
    frictionX: 0.1,
    frictionY: 0.1,
  });

  window.sr = ScrollReveal();
  sr.reveal(".scroll-animated-from-bottom", {
    duration: 600,
    delay: 0,
    origin: "bottom",
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    distance: "20vh",
    viewFactor: 0.4,
    scale: 1,
  });

  var date = new Date();
  var whatYearIsIt = "© " + date.getFullYear() + " Small Bytes";
  document.getElementById("whatYearIsIt").innerHTML = whatYearIsIt;
});
