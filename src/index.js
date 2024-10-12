document.getElementById('add-note-btn').addEventListener('click', () => {
    const noteInput = document.getElementById('note-input');
    const note = noteInput.value.trim();
    if (note) {
        addNote(note);
        renderNotes();
        noteInput.value = ''; // Clear the input field
    }
    });
    
    renderNotes(); // Initial render
        