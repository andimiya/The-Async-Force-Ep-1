
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
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://swapi.co/api/people/4');
oReq.send();


}(window))