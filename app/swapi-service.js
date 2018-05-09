function SwapiService() {
  //private

  //public
  this.getPeople = function getPeople(url, cb) {
    if (typeof cb != "function") {
      return console.error("[getPeople] requires a callback", url, cb);
    }
    url = url || "https://swapi.co/api/people/";
    // @ts-ignore
    $.get(url).then(cb);
  };
}

