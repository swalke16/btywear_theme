(function() {

  $(function() {
    $('.sign_in').click(function(e) {
      e.preventDefault();
      $('.modal').css('display', 'block');
      return setTimeout(function() {
        return $('.modal').addClass('modal_open');
      }, 1);
    });
    $('.cancel_button').click(function() {
      $('.modal').removeClass('modal_open');
      return setTimeout(function() {
        return $('.modal').css('display', 'none');
      }, 300);
    });
    $('nav a.affiliates_link').click(function(e) {
      e.preventDefault();
      $('.dropdown').toggleClass('dropdown_open');
      return $(this).toggleClass('selected');
    });
    $('.color').click(function() {
      $(this).siblings().addClass('fade');
      return $(this).removeClass('fade');
    });
    $('.sizes').click(function() {
      $(this).siblings().addClass('fade');
      return $(this).removeClass('fade');
    });
    if ($('.total').text() === "0") {
      $(".checkout").css('display', 'none');
    }
    return $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        $('.modal').removeClass('modal_open');
        return setTimeout(function() {
          return $('.modal').css('display', 'none');
        }, 300);
      }
    });
  });

}).call(this);

$(document).ready(function(){
  if ($(".login_page").length > 0) {
    $(".sign_in").click();
  }
});

