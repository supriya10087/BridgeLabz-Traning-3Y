// Q5: Movie Ticket Booking (Objects + RegExp)
// This script works with Q5_Movie_Ticket_Booking.html.

const ticketForm = document.getElementById("ticketForm");

ticketForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("bookingName").value.trim();
    const email = document.getElementById("bookingEmail").value.trim();
    const seats = Number(document.getElementById("bookingSeats").value);

    const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    const nameError = document.getElementById("bookingNameError");
    const emailError = document.getElementById("bookingEmailError");
    const seatsError = document.getElementById("bookingSeatsError");
    const result = document.getElementById("bookingResult");

    nameError.textContent = namePattern.test(name) ? "" : "Name must contain alphabets only.";
    emailError.textContent = emailPattern.test(email) ? "" : "Enter a valid email address.";
    seatsError.textContent = seatsValid ? "" : "Choose between 1 and 10 seats.";

    if (!namePattern.test(name) || !emailPattern.test(email) || !seatsValid) {
        result.textContent = "Please fix the errors above.";
        result.style.color = "red";
        return;
    }

    // Save the successful booking in an object.
    const booking = { name: name, email: email, seats: seats };
    result.textContent = `Booking Confirmed!\\nName: ${booking.name}\\nEmail: ${booking.email}\\nSeats: ${booking.seats}`;
    result.style.color = "green";
});
