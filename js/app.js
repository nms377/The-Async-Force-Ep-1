/*jshint esversion: 6*/

(function(window){

function reqListener(){
	console.log('the response text', this.responseText);

	//person
	let person4 = JSON.parse(this.responseText);
	console.log(person4);

	//person name
	let person4Name = person4.name;
	console.log(person4Name);
	document.getElementById('person4Name').innerHTML = person4Name;

		//will load person4's name when reqListener loads person's name
		function reqListenerName(){
			let personsName = JSON.parse(this.responseText);
			let name = personsName.name;
			document.getElementById('person4Name').innerHTML = name;
		}
}

	const oReq = new XMLHttpRequest();
	oReq.addEventListener('load', reqListener);
	oReq.open('GET', 'http://swapi.co/api/people/4/');
	oReq.send();

}(window));