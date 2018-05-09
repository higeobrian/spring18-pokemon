function PokemonController(){
    //private
    var pokemonService = new PokemonService();



//BUTTONS 

    // function drawButton(arr) {
    //     var template = "<ul>";
    //     for (let i = 0; i < arr.length; i++) {
    //       const pokemon = arr[i];
    //       template += `
    //         <li onclick="app.controllers.pokemonController.getPkDetails('${pokemon.url}')">${pokemon.name}</li>
    //       `;
    //     }
    //     template += "</ul>";
    //     document.getElementById("pokebuttons").innerHTML = template;
    //   }

//INFO
      function drawPokeData(arr){
          console.log(arr)                                
        var template = `
          <h3>Name ${url.name}</h3>
          <h3>Weight ${url.weight}</h3>
          <ul>
        `
        for (let i = 0; i < arr.name; i++) {
          const poke = arr.name[i];
          template += `<li>${poke.name}</li>`
        }
        template += '</ul>'
        document.getElementById('names').innerHTML = template
      }

      this.getPokeData = function getPokeData(cb){
        pokemonService.getPokeData(drawPokeData)
      }



    //   pokemonService.getPokeData("names", drawPokeDet)

    
}
// pokemonService.getPkDetails(drawPokemon)
// }  

//   this.getDetails = function getDetails(url){
//     dndService.getDetails(url, drawDetails)
//   }

