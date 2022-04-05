function addNotes(){
    document.querySelector('.notes-input').classList.remove('hidden')
    document.querySelector('.add-note-button').classList.add('hidden')
}

export { addNotes }