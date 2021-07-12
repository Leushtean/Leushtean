$(function(){
   
   $('.top-slider__inner'). slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2500

   });

   $(".star").rateYo({
      spacing: "1px",
      starWidth: "18px",
      ratedFill: "#ffc35b",
      normalFill: "#ccccce",
      readOnly: true
   });


});