(function($) {

  $.fn.responsiveMenu = function(options) {

    var settings = $.extend({
      breakWidth: 600,
      label: 'Menu',
      position: 'left'
    }, options);

    var $this = $(this);

    $this.wrap('<div id="responsiveMenu" class="rm-' + settings.position + '"></div>');

    var $wrap = $this.parent();

    $wrap.prepend('<button class="rm-toggle">' + (settings.label ? '<span class="rm-label">' + settings.label + '</span>' : '') + '&#8801;</button>');

    var initResponsiveMenu = function(){

      if ( $(window).width() <= settings.breakWidth ) {
        $wrap.addClass("rm-small");
      } else {
        $wrap.removeClass("rm-small");
      }
    };

    initResponsiveMenu();

    $(".rm-toggle").click(function(){
      $wrap.toggleClass("rm-open");
    });

    $(window).on("resize", initResponsiveMenu);
  };
})(jQuery);
