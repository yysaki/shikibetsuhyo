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
  loadFromCookie();
  $(':checkbox').change(() => saveToCookie());
});

// Save/Load Cookie Data "{{{1

var loadFromCookie = () => {
  if (typeof getCookie() === "undefined") return;

  var cookieData = JSON.parse(getCookie());
  Object.keys(cookieData)
  .forEach((key) => {
    $(`#${key} :checkbox`)
    .each((index, elem) => $(elem).prop('checked', cookieData[key][$(elem).data('id')]));
  });
};

var saveToCookie = () => {
  var ary = {};
    $(':checkbox')
    .each((index, val) => {
      var t = $(val).data('type');
      if (!(t in ary))
        ary[t] = {};
      ary[t][$(val).data('id')] = $(val).prop('checked');
    });
  var json = JSON.stringify(ary);
  setCookie(json);
};

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

// __END__  "{{{1
// vim: expandtab softtabstop=2 shiftwidth=2
// vim: foldmethod=marker
