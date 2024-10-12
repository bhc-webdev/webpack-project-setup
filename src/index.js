document.getElementById('note-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const noteInput = document.getElementById('note-input');
    const note = noteInput.value.trim();

    if (note) {
        const noteList = document.getElementById('note-list');
        const newNote = document.createElement('li');
        newNote.textContent = note;
        noteList.appendChild(newNote);
        noteInput.value = ''; // Clear the input field
    }
});