function PokemonService(){
    // var bcw = '//bcw-getter.herokuapp.com/?url='
    var url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'

  this.getPokeData = function getPokeData(cb) {
    //@ts-ignore
      $.get(url)
        .then(data => {
          cb(data)
        })
    }  

    

  // this.getPokeCol = function getPokeCol(details, cb) {
  //     //@ts-ignore
  //    $.get(url + details)
  //     .then(data => {
  //       cb(data)
  //     })
  // }



}