responsive-menu
======================

A very simple jQuery/Zepto plugin for responsive menus

## Installation

Two options:

* With [Bower](http://bower.io/): `bower install responsive-menu --save`
* Download the [latest release](https://github.com/devatrox/responsive-menu/releases)

## Usage

### Stylesheet

* Include the Stylesheet in your `<head>`
* Or import the SCSS or Less file via @import

### Script

* Include the Script in `<head>`
* Don't forget to include [jQuery](http://jquery.com/) or [Zepto](http://zeptojs.com/) (with selector and event modules) before that!

## Markup
```
<script>
  $(function(){
    $('#menu').responsiveMenu({
      breakWidth: 800, // optional (default: 600)
      label: false // optional (default: 'Menu')
      position: 'right' // optional (default: 'left')
    });
  });
</script>

<ul id="menu">
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
</ul>
```
