// <!--- Scroll Down Logo Function ==================================================-->
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 5) {
//         $(".cn-stick-nav").addClass("fixed-top navbar-dark bg-dark nav-bdr");
//     }
//     else {
//         $(".cn-stick-nav").removeClass("fixed-top navbar-dark bg-dark nav-bdr");
//     }
// })
// $(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 5) {
//             $(".navbar .navbar-brand img").attr("src", "img/logo.svg");
//         }
//         else {
//             $(".navbar .navbar-brand img").attr("src", "img/turgut.svg");
//         }
//     })
// })

$(function () {
  // bind change event to select
  $(".selectpicker").on("change", function () {
    var url = $(this).val() // get selected value
    if (url) {
      // require a URL
      window.location = url // redirect
    }
    return false
  })
})



var imageSwap = function () {
    var $this = $(this);
   
    var newSource = $this.data('swap');
    $this.data('swap', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('img.playgif').hover(imageSwap, imageSwap);
});


