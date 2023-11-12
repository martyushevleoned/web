async function query() {

	let url='http://localhost:8080/my-projects/1';
	let response = await fetch(url);

	if (response.ok) {

	  let json = await response.json();
	  addElement(json);

	} else {

	  alert('Ошибка HTTP: ' + response.status);

	}
}

async function addElement(json) {

	console.log(json);
	console.log(json.id);
	console.log(json.username);

	let span = document.createElement("span");
	span.innerText = json.username;

	let div = document.createElement("div");
	div.className = "content";
	div.appendChild(span);

	let wrapper = document.getElementById('w');
	wrapper.appendChild(div);
}