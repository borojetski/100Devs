// When button is pressed, query the api for the show, determine show id.
// Using id, determine next air date and print to dom.

document.querySelector('button').addEventListener('click', getShowId)
let nextEpUrl = 'https://api.tvmaze.com/episodes/2291215'
 

function getShowId(){
  const showTitle = document.querySelector('input').value.toLowerCase()
  const url =  `https://api.tvmaze.com/singlesearch/shows?q=${showTitle}`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        nextEpUrl = data._links.nextepisode.href
        document.querySelector('h2').innerText = `${data.name}`
        document.querySelector('img').src = data.image.medium
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  
    fetch(nextEpUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = `Next Episode Airdate is ${new Date(data.airdate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}.`
      })      
      .catch(err => {
          console.log(`error ${err}`)
      });
}


