require('jquery');
require('jquery.cookie');

// for flat-ui
require('jquery-ui');
require('jquery-ui-touch-punch');
require('../bower_components/bootstrap/dist/js/bootstrap.js');
require('bootstrap-switch');
require('bootstrap-tagsinput');
// require('holderjs');
// require('typeahead.js');
require('select2');
require('../bower_components/flat-ui/js/radiocheck.js');

$(() => {
  alert("hello");
//  $.cookie('test', ' with jQuery cookie plugin');
  $('#content').text('Hello jQuery ' + $.fn.jquery + $.cookie('test'));
});
