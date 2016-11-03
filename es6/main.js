// require libraries for browserify-shim
require('jquery');
require('jquery-mobile');

import CookieManager from './cookie-manager.js';
import gameList from './model/game-list.js';

$(() => {
  var cm = new CookieManager(document);

  if (gameList.some(game => location.pathname == `/${game.id}/`)) {
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
