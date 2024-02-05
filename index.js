function addRowToTable(firstName, lastName, email, phone) {
    document.querySelector('.card').style.display = 'block';
    const tableBody = document.querySelector('#dataTable tbody');
    const section = `<tr>
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${email}</td>
                        <td>${phone}</td>
                    </tr> `;
    tableBody.insertAdjacentHTML('beforeend', section);
}

document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) throw new Error('No file');
    event.target.style.color = 'black';

    const reader = new FileReader();
    reader.onload = (e) => {
        const texts = e.target.result.split('\n');
        texts.forEach(text => {
            const [firstName, lastName, email, phone] = text.split(',');
            addRowToTable(firstName, lastName, email, phone);
        });
    }
    reader.readAsText(file);
});
