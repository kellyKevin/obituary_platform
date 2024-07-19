function validateForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const dod = document.getElementById('dod').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    if (!name || !dob || !dod || !content || !author) {
        alert('Please fill out all fields.');
        return false;
    }
    return true;
}
