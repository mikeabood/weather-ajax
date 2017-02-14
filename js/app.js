var response = {};
var id = prompt('Enter a zip code')

// "http://api.openweathermap.org/data/2.5/weather?zip='+ id +'us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98",
$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + id + ',us' + '&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98',
  type: "GET",
  dataType: 'json',
  success: function(data) {
  	response = data;
  	var city = data.name; 


  	var body = document.getElementsByTagName("body")[0]
  	var heading = document.createElement("h1")
  	body.appendChild(heading);
  	heading.innerHTML = city; 

  	var temp = data.main.temp;
  	var mainTemp = Math.floor(temp);
  	var body = document.getElementsByTagName("body")[0]
  	var heading = document.createElement("h1")
  	body.appendChild(heading);
  	heading.innerHTML = mainTemp + " °F"; 

  
  	var hiTemp = response.main.temp_max;
  	var topTemp = Math.floor(hiTemp)
  	var body = document.getElementsByTagName("body")[0]
  	var heading = document.createElement("h4")
  	body.appendChild(heading);
  	heading.innerHTML = topTemp + " °F"; 

  	var loTemp = response.main.temp_min;
  	var botTemp = Math.floor(loTemp);
  	var body = document.getElementsByTagName("body")[0]
  	var heading = document.createElement("h4")
  	body.appendChild(heading);
  	heading.innerHTML = botTemp + " °F";

  	  var description = document.createElement('h2');
    description.id = 'current';
    description.innerHTML = response.weather[0].description;
    body.appendChild(description)





  },

  fail: function(error){
  	console.log(error)
  }
});
