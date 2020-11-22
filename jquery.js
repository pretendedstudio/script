$(document).ready(function(){
    $(".dropdown-button").click(function(e) {
      e.preventDefault();
      var $div = $(this).next('.dropdown-container');
      $(".dropdown-container").not($div).slideUp();
        if ($div.is(":visible")) {
            $div.slideUp();
        }  else {
           $div.slideDown();
        }
    });
    $(document).click(function(e){
        var p = $(e.target).closest('.dropdown').length
        if (!p) {
              $(".dropdown-container").slideUp();
        }
    });   
});
