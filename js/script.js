$(document).ready(function () {

  $("li.dropitem").click(function () {
    $(this).siblings().find(".dropdown").removeClass('dbloc');
    $(this).children(".dropdown").toggleClass('dbloc');
  });

});
