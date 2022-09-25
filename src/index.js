import { notes } from './data.js';

if (notes.length > 0) {
  const tbody = document.querySelector('tbody');
  const template = document.querySelector('#noteRow');

  notes.forEach((note) => {
    const clone = template.content.cloneNode(true);
    let td = clone.querySelectorAll('td');
    td[0].textContent = note.name;
    td[1].textContent = note.created;
    td[2].textContent = note.category;
    td[3].textContent = note.content;
    td[4].textContent = note.dates || '';

    tbody.appendChild(clone);
  });
}

const createNoteBtn = document.querySelector('#createNote');
createNoteBtn.addEventListener('click', (e) => {
  console.log('click');
});
