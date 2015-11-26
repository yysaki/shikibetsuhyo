export default class CookieManager {
  constructor(doc) {
    this.doc = doc;
  }

  loadFromCookie() {
    var rawData = this._getCookie();
    if (!this._isValid(rawData)) return;

    var cookieData = this._decode(rawData);
    Object.keys(cookieData)
    .forEach((key) => {
      $(`#${key} :checkbox`)
      .each((index, elem) =>
        $(elem)
        .prop('checked', cookieData[key][$(elem).data('id')])
        .checkboxradio('refresh')
      );
    });
  }

  saveToCookie() {
    var ary = {};
      $(':checkbox')
      .each((index, val) => {
        var t = $(val).data('type');
        if (!(t in ary))
          ary[t] = {};
        ary[t][$(val).data('id')] = $(val).prop('checked');
      });

    this._setCookie(this._encode(ary));
  }

  _decode(fromCookie) {
    return JSON.parse(fromCookie);
  }

  _encode(ary) {
    return JSON.stringify(ary);
  }

  _isValid(rawData) {
    return typeof rawData !== "undefined";
  }

  _setCookie(data) {
    var thirtyDaysLater = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    this.doc.cookie = `data=${encodeURIComponent(data)};path=${location.pathname};expires=${thirtyDaysLater.toGMTString()}`;
  }

  _getCookie() {
    if (!this.doc.cookie) return;

    var targetCookie =
      this.doc.cookie
      .split("; ")
      .map((elem) => {
        var str = elem.split('=');
        return {key: str[0], value: str[1]};
      })
      .filter((cookie) => cookie.key == 'data');

    if (!targetCookie.some((cookie) => cookie.key == 'data')) return;

    return decodeURIComponent(targetCookie[0].value);
  }
}
