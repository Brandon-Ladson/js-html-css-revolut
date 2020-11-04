$(document).ready(function () {

  $("li.dropitem").click(function () {
    $(this).children(".dropdown").toggleClass('dbloc');
  });

});
