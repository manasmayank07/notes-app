function saveNote() {
  const note = document.getElementById('note').value;
  if (note) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    document.getElementById('note').value = '';
    displayNotes();
  }
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  const list = document.getElementById('notesList');
  list.innerHTML = '';
  notes.forEach(n => {
    const li = document.createElement('li');
    li.textContent = n;
    list.appendChild(li);
  });
}

displayNotes();
