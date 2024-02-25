$('#myCarousel').carousel({
  interval: 3000,
});

// FormData
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

// slider start 

$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768,2],
      itemsMobile:[650,1],
      pagination:true,
      autoPlay:true
  });
});

jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() < 50) {
    jQuery("#rocketmeluncur").slideUp(500);
  } else {
    jQuery("#rocketmeluncur").slideDown(500);
  }
  var ftrocketmeluncur = jQuery("#ft")[0]
    ? jQuery("#ft")[0]
    : jQuery(document.body)[0];
  var scrolltoprocketmeluncur = $("rocketmeluncur");
  var viewPortHeightrocketmeluncur = parseInt(
    document.documentElement.clientHeight
  );
  var scrollHeightrocketmeluncur = parseInt(
    document.body.getBoundingClientRect().top
  );
  var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
  var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
  if (basewrocketmeluncur < 1000) {
    var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)["left"]);
    leftrocketmeluncur =
      leftrocketmeluncur < swrocketmeluncur
        ? leftrocketmeluncur * 2 - swrocketmeluncur
        : leftrocketmeluncur;
    scrolltoprocketmeluncur.style.left =
      basewrocketmeluncur + leftrocketmeluncur + "px";
  } else {
    scrolltoprocketmeluncur.style.left = "auto";
    scrolltoprocketmeluncur.style.right = "10px";
  }
});


jQuery("#rocketmeluncur").click(function () {
  jQuery("html, body").animate(
    { scrollTop: "0px", display: "none" },
    {
      duration: 600,
      easing: "linear"
    }
  );

  var self = this;
  this.className += " " + "launchrocket";
  setTimeout(function () {
    self.className = "showrocket";
  }, 800);
});

















AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 70, // offset (in px) from the original trigger point
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms

});
    









