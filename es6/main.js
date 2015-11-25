require('jquery');
require('jquery-mobile');
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

import * as shiren4 from '../es6/model/shiren4.js';

$(() => {
  var cm = new CookieManager(document);

  if (location.pathname == '/shiren4/') {
    $(':checkbox').checkboxradio();

    $('a.reset-checkboxes').click(() => {
      if(window.confirm('リセットしますか？'))
        clearCheckboxes(cm);
    });

    cm.loadFromCookie();
    $(':checkbox').change(() => cm.saveToCookie());
  }
});

// Clear CheckBoxes "{{{1

var clearCheckboxes = cm => {
  $(':checkbox')
  .prop('checked', false)
  .checkboxradio('refresh');

  cm.saveToCookie();
};

// __END__  "{{{1
// vim: expandtab softtabstop=2 shiftwidth=2
// vim: foldmethod=marker
