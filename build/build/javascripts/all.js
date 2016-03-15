$(function(){

  var $topbarContainer = $('.navigation');
  //ADD ACTIVE ON SCROLL
  $(document).load().scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
    $topbarContainer.addClass("active");
    } else {
      $topbarContainer.removeClass("active");
    }
  });

  $('.mobile-nav-trigger').on('click', function(event){
    event.preventDefault();
    var leftNav    = $('.left-nav'),
        rightNav   = $('.right-nav'),
        topBar     = $('.topbar-container'),
        navBlock   = $('.nav-block'),
        mobileMenu = $('.mobile-menu');

    $(this).siblings(topBar).children(navBlock).find(rightNav).toggleClass('mobile-menu-active');
    $(this).parents('body').toggleClass('overflow-x').toggleClass('overflow-hidden');

    if ($(this).hasClass('open')){
      $(this).removeClass('open').addClass('close');
    } else {
      $(this).addClass('open').removeClass('close');
    }
  });

});
(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset -60
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
})(jQuery);


jQuery(function(){
  jQuery.mark.jump();
});
