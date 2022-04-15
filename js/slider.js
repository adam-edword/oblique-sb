window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var speed = 5000;
(function currencySlide(){
    var currencyPairWidth = $('.gallery-item:first-child').outerWidth();
    $(".landing").animate({marginLeft:-currencyPairWidth},speed, 'linear', function(){
                $(this).css({marginLeft:0}).find("div:last").after($(this).find("div:first"));
        });
        requestAnimationFrame(currencySlide);
})();
