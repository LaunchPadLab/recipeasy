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
