//halls
document.getElementById('book').onclick = function(event) {

    // Retrieve values
    const guest = document.getElementById('guest').value.trim();
    const client = document.getElementById('client').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value.trim();
    const halls = document.querySelectorAll('input[name="hall"]');
    const msg = document.getElementById('alert');
    const form = document.getElementById('bookForm');

    // Validate form fields
    if (client === '' || contact === '' || email === '' || date === '') {
        event.preventDefault();
        msg.textContent = "Fill all the fields!!";
    } else if (guest === '' || guest < 50) {
        event.preventDefault();
        msg.textContent = "Number of guests should be greater than 50!!";
    } else if (guest > 5000) {
        event.preventDefault();
        msg.textContent = "We cannot provide space for such a huge number of guests!!";
    } else {
        const anyChecked = Array.from(halls).some(checkbox => checkbox.checked);
        if (!anyChecked) {
            event.preventDefault();
            msg.textContent = "Choose at least one hall";
        } else {
            msg.textContent = ''; // Clear previous messages
            alert("Thank you!! Your booking has been submitted. You will receive an email according to the information provided.");
        }
    }
}

//main
document.getElementById('send').onclick = function(event) {

    // Retrieve values
    const client = document.getElementById('name').value.trim();
    const contact = document.getElementById('phone').value.trim();
    const email = document.getElementById('email1').value.trim();
    const age = document.getElementById('age').value.trim();
    const message = document.getElementById('message').value.trim();
    const msg = document.getElementById('alert1');
    const form = document.getElementById('messageForm');

    // Validate form fields
    if (client === '' || contact === '' || email === '' || age === '' || message == '') {
        msg.textContent = "Fill all the fields!!";
        event.preventDefault(); // Prevent form from submitting and refreshing the page
    } else {
        if(age < 18 || age > 100){
            msg.textContent = 'Please enter age in range of 18 - 100';
            event.preventDefault(); // Prevent form from submitting and refreshing the page
        }else{
            msg.textContent = ''; // Clear previous messages
            alert("Thank you!! Your review has been submitted. You will receive an email according to the information provided.");
        }
}
}