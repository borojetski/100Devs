// Query the freegeoip api to determine whether your current ip address is based in California.
document.querySelector('button').addEventListener('click', isMyVpnOn)

function isMyVpnOn(){
  const url = 'https://api.freegeoip.app/json/?apikey=65280b00-b974-11ec-8f2b-734bbb0b7ae8'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.ip)
        console.log(data.region_name)
        function region(){
          if(data.region_name === "California"){
            return 'OFF!'
          } "On."
        }
        document.querySelector('h3').innerText = `Your IP Address Region is ${data.region_name}.`
        // document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h2').innerText = `Your VPN is ${region()}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}