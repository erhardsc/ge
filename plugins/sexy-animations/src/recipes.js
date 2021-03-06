$=jQuery;


/****** ANIMATION RECIPES *******
 *
 *  Create your animation recipes by using these HTML classes:
 *
 *  .wp-animation
 *  .wp-{animationName}
 *  .wp-delay-{numberOfSeconds}
 *
 *  Example -fadeIn animation with 1 second delay:
 *   $('.className').addClass('wp-animation').addClass('wp-fadeIn').addClass('wp-delay-1');
 *
 * */

$( document ).ready(function() {

  /******** Product Slider Recipe ******/

  // fadeIn
  $('.home hr').addClass('wp-animation').addClass('wp-fadeIn').addClass('wp-delay-1');
  $('.home .ge-slider-product-title').addClass('wp-animation').addClass('wp-fadeIn').addClass('wp-delay-1');
  $('.home .ge-slider-product-price').addClass('wp-animation').addClass('wp-fadeIn').addClass('wp-delay-2');
  $('.home .ge-slider-product-headline.desktop').addClass('wp-animation').addClass('wp-fadeIn');
  // fadeInUp
  $('.home .ge-slider-product').addClass('wp-animation').addClass('wp-fadeInUp');
  $('.home .ge-slider-add-to-cart').addClass('wp-animation').addClass('wp-fadeInUp').addClass('wp-delay-2');


  $('.product-background.record').addClass('wp-animation').addClass('wp-rotateIn').addClass('wp-delay-1');

  /******** Shop Category Page's Recipe ******/

  //fadeInUp
  $('.archive.woocommerce .product').addClass('wp-animation').addClass('wp-fadeInUp');
  $('.archive.woocommerce .woocommerce-ordering select').addClass('wp-animation').addClass('wp-fadeInUp');
  $('.archive .page-title').addClass('wp-animation').addClass('wp-fadeInUp');
  

});