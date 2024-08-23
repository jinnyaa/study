$('.menu-txt').on('click', function() {
  // Remove active class from all menu items
  $('.menu-txt').removeClass('active');
  
  // Add active class to the clicked menu item
  $(this).addClass('active');
  
  // Determine the target section based on the clicked menu item
  var targetClass = '';
  if ($(this).hasClass('menuhome')) {
      targetClass = 'home-top';
  } else if ($(this).hasClass('menuproject')) {
      targetClass = 'project';
  } else if ($(this).hasClass('menucarrers')) {
      targetClass = 'carrers';
  } else if ($(this).hasClass('menuaboutme')) {
      targetClass = 'aboutme';
  }
  
  // Scroll to the target section
  $('html, body').animate({
      scrollTop: $('.' + targetClass).offset().top
  }, 1000);
});