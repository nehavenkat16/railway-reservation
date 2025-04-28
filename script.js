document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const train = document.getElementById('train').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    // Display booking confirmation
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('booking-details').innerHTML = `
        <strong>Train:</strong> ${train} <br>
        <strong>Source:</strong> ${source} <br>
        <strong>Destination:</strong> ${destination} <br>
        <strong>Date:</strong> ${date} <br>
        <strong>Seats:</strong> ${seats}
    `;
});
