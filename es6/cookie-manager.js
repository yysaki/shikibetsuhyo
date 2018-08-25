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

  _decode(rawJson) {
    var fromCookie = JSON.parse(rawJson);
    var cbData = {};

    fromCookie
    .forEach(tuple => {
      var key = tuple[0];
      var len = tuple[1];
      var bits = parseInt(tuple[2], 36);

      var data = {};
      for (var i = 1; i <= len; i++)
      {
        data[i] = (bits % 2 === 1);
        bits = Math.floor(bits / 2);
      }

      cbData[key] = data;
    });

    return cbData;
  }

  _encode(cbData) {
    var jsonObject =
      Object.keys(cbData)
      .map(key => {
        var len = Object.keys(cbData[key]).length;
        var radix36Bits =
          Object.keys(cbData[key])
          .map(index1Str => parseInt(index1Str, 10))
          .reduce((prev, curr, idx, array) => {
            return prev + (cbData[key][curr] ? Math.pow(2, curr - 1) : 0);
          }, 0)
          .toString(36);

        return [key, len, radix36Bits];
      });

    return JSON.stringify(jsonObject);
  }

  _isValid(rawJson) {
    if (rawJson === null) return false;

    var fromCookie = JSON.parse(rawJson);
    if (!Array.isArray(fromCookie)) return false;

    return fromCookie.every(tuple =>
      Array.isArray(tuple)
      && tuple.length === 3
      && typeof tuple[0] === 'string'
      && typeof tuple[1] === 'number'
      && typeof tuple[2] === 'string'
      && parseInt(tuple[2], 36) < Math.pow(2, tuple[1] + 1)
    );
  }

  _setCookie(data) {
    var thirtyDaysLater = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    this.doc.cookie = `data=${encodeURIComponent(data)};path=${location.pathname};expires=${thirtyDaysLater.toGMTString()}`;
  }

  _getCookie() {
    if (!this.doc.cookie) return null;

    var targetCookie =
      this.doc.cookie
      .split("; ")
      .map((elem) => {
        var str = elem.split('=');
        return {key: str[0], value: str[1]};
      })
      .filter((cookie) => cookie.key === 'data');

    if (!targetCookie.some((cookie) => cookie.key === 'data')) return null;

    return decodeURIComponent(targetCookie[0].value);
  }
}
