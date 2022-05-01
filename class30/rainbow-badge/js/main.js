//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  let pokeStore = []
  let pokeImg = []
  let pokeStore2 = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        pokeStore2.push(data.moves[17].move.name)
        
    fetch(url2)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        pokeStore2.push(data.moves[17].move.name)
    
          if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
            document.querySelector('#pokeImg1').src = pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " 2x > "
          }
          if((pokeStore2[0] === "teleport") || (pokeStore2[1] === 'teleport')){
            document.querySelector('#pokeImg1').src = pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1];document.querySelector('h2').innerText = "Peace Out."
          }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });


      
}