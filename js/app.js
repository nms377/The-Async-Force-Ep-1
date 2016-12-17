/*jshint esversion: 6*/

(function(window){

function reqListener(){
	console.log('the response text', this.responseText);

	//person4
	let person4 = JSON.parse(this.responseText);
	console.log(person4);

	//person4Name
	let person4Name = person4.name;
	console.log(person4Name);
	document.getElementById('person4Name').innerHTML = person4Name;

	//person4HomeWorld
	let person4HomeWorld = person4.homeworld;
	console.log(person4HomeWorld);
	document.getElementById('person4HomeWorld').innerHTML = person4HomeWorld;

		//will load person4's name when reqListener loads person's name
		function reqListenerName(){
			let personsName = JSON.parse(this.responseText);
			let name = personsName.name;
			document.getElementById('person4Name').innerHTML = name;
		}

		//will load person4's homeworld when reqListener loads person4 and person4's name
		function person4HomeWorldIs(){
			let homeworldReq = JSON.parse(this.responseText);
			let homeworldIs = homeworldReq.homeworld;
			document.getElementById('person4HomeWorld').innerHTML = homeworldIs;
		}

		//will run homeworld function when window loads person4 and person4Name
		var homeWorld = new XMLHttpRequest();
		homeWorld.addEventListener('load', person4HomeWorldIs);
		homeWorld.open('GET', 'http://swapi.co/api/people/4/');
		homeWorld.send();
}

	//will run reqListener function returning person4 and person4Name
	const oReq = new XMLHttpRequest();
	oReq.addEventListener('load', reqListener);
	oReq.open('GET', 'http://swapi.co/api/people/4/');
	oReq.send();

}(window));