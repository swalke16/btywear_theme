(function() {

  $(function() {
    $('.sign_in').click(function(e) {
      e.preventDefault();
      $('.modal.login').css('display', 'block');
      return setTimeout(function() {
        return $('.modal.login').addClass('modal_open');
      }, 1);
    });

    $('#login_container .cancel_button').click(function(e) {
      e.preventDefault();
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

    $('#signup_container .cancel_button').click(function(e) {
      e.preventDefault();

      $('.modal.signup').removeClass('modal_open');
      return setTimeout(function() {
        return $('.modal.signup').css('display', 'none');
      }, 300);
    });

    $('nav a.affiliates_link').click(function(e) {
      e.preventDefault();
      $('.dropdown').toggleClass('dropdown_open');
      return $(this).toggleClass('selected');
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

    $("#recover_password_container").on("click", ".cancel_button", function(e){
      e.preventDefault();
      $("#recover_password_container").hide();
      $("#login_container").show();
    });

    $("#login_container").on("click", "#forgot_password", function(e){
      e.preventDefault();
      $("#recover_password_container").show();
      $("#login_container").hide();
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

