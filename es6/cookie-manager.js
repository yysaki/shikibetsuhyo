class CookieManager {
  constructor(doc) {
    this.doc = doc;
  }

  loadFromCookie() {
    if (typeof this.getCookie() === "undefined") return;

    var cookieData = JSON.parse(this.getCookie());
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
    var json = JSON.stringify(ary);
    this.setCookie(json);
  }

  setCookie(data) {
    var thirtyDaysLater = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `data=${encodeURIComponent(data)};path=${location.pathname};expires=${thirtyDaysLater.toGMTString()}`;
  }

  getCookie() {
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
}
