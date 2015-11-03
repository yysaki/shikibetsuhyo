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

$(() => {
});

var setCookie = (data) => {
  document.cookie = `data=${encodeURIComponent(data)}`;
};

var getCookie = () => {
	if (!document.cookie) return;

  var targetCookie =
    document.cookie
    .split("; ")
    .map((elem) => {
      var str = elem.split('=');
      return {key: str[0], value: str[1]};
    })
    .filter((cookie) => cookie.key == 'data');

  if (!targetCookie.some((cookie) => cookie.key == 'data')) return;

  return decodeURIComponent(targetCookie[0].value);
}
