/*jshint esversion: 6*/

(function(window){

//Get Person4's name
function person4(){
	console.log('the response text', this.responseText);

	//Console.log person4' data
	let person4 = JSON.parse(this.responseText);
	console.log(person4);

	//Get person4's name
	let person4Name = person4.name;
	console.log(person4Name);
	document.getElementById('person4Name').innerHTML = person4Name;
}

//Get person4's Homeworld
	function person4HomeWorldIs(){
		let person4Home = JSON.parse(this.responseText);
		console.log(person4Home);
		let homeworldIs = person4Home.name;
		document.getElementById('person4Home').innerHTML = homeworldIs;
	}

//Access person4Home
	const person4HomeWorldReq = new XMLHttpRequest();
	person4HomeWorldReq.addEventListener('load', person4HomeWorldIs);
	person4HomeWorldReq.open('GET', 'http://swapi.co/api/planets/1/');
	person4HomeWorldReq.send();

	//Access person4
	const person4Req = new XMLHttpRequest();
	person4Req.addEventListener('load', person4);
	person4Req.open('GET', 'http://swapi.co/api/people/4/');
	person4Req.send();

	//Get Person14's Name
	function person14(){
		console.log('the response text', this.responseText);

		//person14
		let person14 = JSON.parse(this.responseText);
		console.log(person14);

		let person14Name = person14.name;
		console.log(person14Name);
		document.getElementById('person14Name').innerHTML = person14Name;
	}

	function person14Species(){
		let person14Species = JSON.parse(this.responseText);
		console.log(person14Species);
		let species = person14Species.classification;
		console.log(species);
		document.getElementById('person14Species').innerHTML = species;
	}

	const person14SpeciesReq = new XMLHttpRequest();
	person14SpeciesReq.addEventListener('load',person14Species);
	person14SpeciesReq.open('GET', 'http://swapi.co/api/species/1/');
	person14SpeciesReq.send();

	const person14Req = new XMLHttpRequest();
	person14Req.addEventListener('load', person14);
	person14Req.open('GET', 'http://swapi.co/api/people/14/');
	person14Req.send();

}(window));


//Class Review
// let oReq = new XMLHttpRequest();
// oReq.addEventListener('load', function(){
// 	//happens after we get personObj data from remote src
// 	let personObj = JSON.parse(this.responseText);
// 	console.log(personObj.name);
// 	document.getElementById('person4Name').innerHTML = personObj.name;
// 	console.log(personObj.homeworld);

// 	let homeworldReq = new XMLHttpRequest();
// 	homeworldReq.addEventListener('load', function(){
// 		let homeworldObj = JSON.parse(this.responseText);
// 		document.getElementById('person4HomeWorld').innerHTML = homeworldObj.name;
// 		console.log(homeworldObj);
// });

// 	//second http request
// 	homeworldObj.open('GET', personObj.homeworld);
// 	homeworldReq.send();

// 	});


// //first http request
// oReq.open('GET', 'https://swapi.co/api/people/4');
// oReq.send();