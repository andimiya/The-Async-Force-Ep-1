
(function(window){

function reqListener(){

  let person = JSON.parse(this.responseText);
  let person4Name = person.name;
  document.getElementById('person4Name').innerHTML = person4Name;

  let homeWorldReq = new XMLHttpRequest();

  homeWorldReq.addEventListener('load', homeWorldReqListener);
  homeWorldReq.open('GET', 'http://swapi.co/api/planets/1/');
  homeWorldReq.send();
}

function homeWorldReqListener(){
  let planets = JSON.parse(this.responseText);
  let person4HomeWorld = planets.name;
  document.getElementById('person4HomeWorld').innerHTML = person4HomeWorld;

  let person14Req = new XMLHttpRequest();

  person14Req.addEventListener('load', person14ReqListener);
  person14Req.open('GET', 'http://swapi.co/api/people/14/');
  person14Req.send();
}

function person14ReqListener(){
  let person14 = JSON.parse(this.responseText);
  let person14Name = person14.name;
  document.getElementById('person14Name').innerHTML = person14Name;

  let speciesReq = new XMLHttpRequest();

  speciesReq.addEventListener('load', speciesReqListener);
  speciesReq.open('GET', 'http://swapi.co/api/species/1/');
  speciesReq.send();
}

function speciesReqListener(){
  let species = JSON.parse(this.responseText);
  let person14Species = species.name;
  document.getElementById('person14Species').innerHTML = person14Species;

  let filmsReq = new XMLHttpRequest();

  filmsReq.addEventListener('load', filmsReqListener);
  filmsReq.open('GET', 'http://swapi.co/api/films');
  filmsReq.send();
}

function filmsReqListener(){
  let films = JSON.parse(this.responseText);
  let filmList = document.getElementById('filmList');

  //In the film API, loop through the results array
  //Print all the Titles in a bulleted list
  for (var i = 0; i < films.results.length; i++){
    let filmListItem = document.createElement('li');
    let filmTitleHeader = document.createElement('h3');
    filmTitleHeader.innerHTML = films.results[i].title;
    filmListItem.appendChild(filmTitleHeader);
    filmList.appendChild(filmListItem);

    let planetsReq = new XMLHttpRequest();
    planetsReq.open('GET', 'http://swapi.co/api/planets/2/');
    planetsReq.send();

    //After getting the title of the first film,
    //Find the planets object within the films API

    //Loop through the planets array
    //For each [i] in the array, make a call to [i]'s API and parse the JSON
    //Pull out the planets.name from the Planets API


    for(var x = 0; x < films.planets[i].length; x++){
      function planetsReqListener(){
        let planets = JSON.parse(this.responseText);
        let planetListItem = document.createElement('li');
        let planetName = document.createElement('h4');

        // let planetUrl =
        planetName.innerHTML = planets.name;
        console.log(planets.name);
        filmTitleHeader.appendChild(planetName);
        filmList.appendChild(planetListItem);
      }
    }

  }
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://swapi.co/api/people/4');
oReq.send();


}(window))