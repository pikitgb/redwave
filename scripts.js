$(document).ready(function() {

  // $('.your-class').slick({
  //   autoplay: true,
  //   arrows: true,
  //   speed: 500
  //  });


   var mySwiper = new Swiper ('.swiper-container', {
       // Optional parameters
       direction: 'horizontal',
       loop: true,

       // If we need pagination
       pagination: {
         type: "progressbar",
         el: '.swiper-pagination',
       },

       // Navigation arrows
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },

     })

})
