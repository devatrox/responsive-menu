jquery.responsive-menu
======================

A very simple jQuery plugin for responsive menus

## Installation

Two options:

* With Bower: `bower install jquery.responsive-menu --save`
* Download the [latest release](https://github.com/devatrox/jquery.responsive-menu/releases)

## Usage

### Stylesheet

* Include the Stylesheet in your <head>
* Or import the SCSS file via @import

### Script

* Include the Script in <head>
* Don't forget to include [jQuery](http://jquery.com/) before that!

## Markup

  &lt;script&gt;
    $(function(){
      $('#menu').responsiveMenu({
        breakWidth: 800 // optional (default: 600)
      });
    });
  &lt;/script&gt;

  &lt;ul id="menu"&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
