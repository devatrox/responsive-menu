(function($) {

  $.fn.responsiveMenu = function(options) {

    var settings = $.extend({
      breakWidth: 600,
      theme: 'flat-red'
    }, options);

    var $this = $(this);

    $this.wrap('<div id="responsiveMenu" class="rm-theme-' + settings.theme + '"></div>');

    var $wrap = $this.parent();

    $wrap.prepend('<button class="rm-toggle">&#8801;</button>');

    var initResponsiveMenu = function(){

      if ( $(window).width() <= settings.breakWidth ) {
        $wrap.addClass("rm-small");
      } else {
        $wrap.removeClass("rm-small");
      }
    };

    initResponsiveMenu();

    $(".rm-toggle").click(function(){
      $wrap.toggleClass("rm-expanded");
    });

    $(window).on("resize", initResponsiveMenu);
  };
})(jQuery);
