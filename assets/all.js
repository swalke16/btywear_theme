(function() {

  $(function() {
    $('.sign_in').click(function(e) {
      e.preventDefault();
      $('.modal.login').css('display', 'block');
      return setTimeout(function() {
        return $('.modal.login').addClass('modal_open');
      }, 1);
    });
    $('.cancel_button').click(function() {
      $('.modal.login').removeClass('modal_open');
      return setTimeout(function() {
        return $('.modal.login').css('display', 'none');
      }, 300);
    });
    $('.sign_up').click(function(e) {
      e.preventDefault();
      $('.modal.signup').css('display', 'block');
      return setTimeout(function() {
        return $('.modal.signup').addClass('modal_open');
      }, 1);
    });
    // $('.cancel_button').click(function() {
    //   $('.modal.signup').removeClass('modal_open');
    //   return setTimeout(function() {
    //     return $('.modal.signup').css('display', 'none');
    //   }, 300);
    // });
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

    $(".thumbnails").on("click", "a", function(e){
      e.preventDefault();
      $(".thumbnails .product").removeClass("active");
      $(this).addClass("active");
      $(".product.full_view img").attr("src", $(this).find("img").attr("src"));
    });

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
  if ($(".register").length > 0) {
    $(".sign_up").click();
  }
});

