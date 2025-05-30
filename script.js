document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your consultation request has been submitted.');
});
document.querySelector('.appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Appointment request submitted successfully!');
});