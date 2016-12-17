
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

  for (var i = 0; i < films.results.length; i++){
    let node = document.createElement('LI');
    let filmResults = document.createTextNode(films.results[i].title)
    node.appendChild(filmResults);
    document.getElementById('filmList').appendChild(node);

  }

  let planetsReq = new XMLHttpRequest;

  planetsReq.addEventListener('load', planetsReqListener);
  planetsReq.open('GET', 'http://swapi.co./api/planets/1/');
  planetsReq.send();
}

function planetsReqListener(){
  let planets = JSON.parse(this.responseText);
  console.log(planets.name);

  // let node = document.createElement('LI');
  // let planets = document.createTextNode('planetAlderaan');
  // node.appendChild(filmResults);
  // document.getElementById('filmList').appendChild(node);

}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://swapi.co/api/people/4');
oReq.send();


}(window))