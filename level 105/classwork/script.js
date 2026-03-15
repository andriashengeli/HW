const div = document.querySelector('div');

const p1 = document.createElement('p');
p1.textContent = 'paragraph 1';

const h1 = document.createElement('h1');
h1.textContent = 'heading 1';

const button = document.createElement('button');
button.textContent = 'button';

const h2 = document.createElement('h2');
h2.textContent = 'heading 2';

div.appendChild(p1);
div.appendChild(h1);
div.appendChild(button);
div.appendChild(h2);

div.removeChild(div.firstElementChild);
div.removeChild(div.lastElementChild);