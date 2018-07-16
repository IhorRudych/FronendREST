const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://boiling-badlands-18377.herokuapp.com/api/contacts', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(contact => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = contact.name;

      const p = document.createElement('p');
      contact.description = contact.email.substring(0, 300);
      p.textContent = `${contact.email}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `some error there!`;
    app.appendChild(errorMessage);
  }
}

request.send();