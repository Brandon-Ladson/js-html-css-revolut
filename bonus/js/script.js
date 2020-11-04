$(document).ready(function () {

  $("li.dropitem").click(function () {
    $(this).children(".dropdown").toggleClass('dbloc');
  });

  $('a > i').click(function () {
    $('.hamburger-menu').addClass("active");
  });

  $('a.close > i').click(function () {
    $('.hamburger-menu').removeClass("active");
  });

});
