
(function(window){

function reqListener(){

let person = JSON.parse(this.responseText);
let person4Name = person.name;
document.getElementById('person4Name').innerHTML = person4Name;
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'http://swapi.co/api/people/4');
oReq.send();


}(window))