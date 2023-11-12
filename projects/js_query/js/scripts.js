async function query() {

	let url = new URL('http://localhost:8080/my-projects');
	let params = new URLSearchParams({
		id: document.getElementById('in').value
	});


	let response = await fetch(url + '?' + params);

	if (response.ok) {

	  let json = await response.json();
	  addNode(json);

	} else {

	  alert('Ошибка HTTP: ' + response.status);

	}
}

function addNode(json) {

	console.log(json);

	let span = document.createElement("span");
	span.innerText = json.username;

	let div = document.createElement("div");
	div.className = "content";
	div.appendChild(span);

	let wrapper = document.getElementById('w');
	wrapper.appendChild(div);
}

function removeNode(id) {

	document.getElementById(id).remove();
}


function openPage() {
	window.location = 'https://www.youtube.com/watch?v=wtnkgnERhXE';
} 