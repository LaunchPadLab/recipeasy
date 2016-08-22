
$(function(){
  $('#ga-get-started').on('click', function(){
    console.log('click event triggered');
    ga('send', 'event', 'get_started', 'click', 'Page Events');
  });

  $('#ga-contact-us-1').on('click', function(){
    console.log('click event triggered');
    ga('send', 'event', 'contact_us_1', 'click', 'Page Events');
  });

  $('#ga-contact-us-2').on('click', function(){
    console.log('click event triggered');
    ga('send', 'event', 'contact_us_2', 'click', 'Page Events');
  });
});
