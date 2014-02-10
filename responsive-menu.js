;(function($) {

  $.fn.responsiveMenu = function(options) {

    var settings = $.extend({
      breakWidth: 600,
      label: 'Menu',
      position: 'left'
    }, options);

    var menu = $(this);

    var clone = menu.clone().insertBefore(menu).removeAttr('class').removeAttr('id');
    var wrapper = $('<div class="responsive-menu rm-' + settings.position + '"></div>');
    var button = $('<button class="rm-toggle">' + (settings.label ? '<span class="rm-label">' + settings.label + '</span>' : '') + '&#8801;</button>');

    wrapper.insertBefore(menu);
    wrapper.prepend(clone);
    wrapper.prepend(button);

    var switchMenu = function() {

      if ( $(window).width() <= settings.breakWidth ) {
        wrapper.show();
        menu.hide();
      } else {
        wrapper.hide();
        menu.show();
      }
    };

    switchMenu();

    button.click(function(){
      clone.toggle();
    });

    $(window).resize(switchMenu);
  };
})(window.Zepto || window.jQuery);
