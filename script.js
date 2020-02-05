// This will create elements for testing, don't change this code
(() => {
  const MS_PER_MINUTE = 60000
  const NOW = new Date()
  let minutes = [0, 1, 30, 60, 6 * 60, 23 * 60, 24 * 60]
  let dates = []

  minutes.forEach((i) => dates.push(new Date(NOW - i * MS_PER_MINUTE)))

  dates.forEach((item) => {
    let el = document.createElement("div")
    el.innerHTML = "Started "

    let dt = document.createElement('span')
    dt.className = 'js-date-format'
    dt.innerHTML = item.toISOString()
    el.appendChild(dt)
    document.body.appendChild(el)
  })
})();

// 2. Date formatting
dateFormatter = () => {
  var dateElements = document.getElementsByClassName("js-date-format")

  for (let el of dateElements) {
    var dateInMills = new Date() - new Date(el.innerHTML)

      if(dateInMills <= 1) {
        console.log(new Date(dateInMills).getUTCSeconds(), dateInMills, "second ago")
        el.innerHTML = new Date(dateInMills).getUTCSeconds() + " second ago"
      }
    
      else if(dateInMills > 1 && dateInMills  <= 60001){
        console.log(new Date(dateInMills).getUTCMinutes(), dateInMills, "minute ago")
        el.innerHTML = new Date(dateInMills).getUTCMinutes() + " minute ago"
      }
        
      else if(dateInMills > 60001 && dateInMills <= 3600001) {
        console.log(new Date(dateInMills).getUTCMinutes(), dateInMills, "minutes ago")
        el.innerHTML = new Date(dateInMills).getUTCMinutes() + " minutes ago"
      }

        else if(dateInMills > 3600001 && dateInMills <= 7200001) {
          console.log(new Date(dateInMills).getUTCHours(), dateInMills, "hour ago")
          el.innerHTML = new Date(dateInMills).getUTCHours() + " hour ago"
        }

      else if(dateInMills > 3700001) {
        console.log(new Date(dateInMills).getUTCHours(), dateInMills, "hours ago")
        el.innerHTML = new Date(dateInMills).getUTCHours() + " hours ago"
      }
  }
}
dateFormatter()