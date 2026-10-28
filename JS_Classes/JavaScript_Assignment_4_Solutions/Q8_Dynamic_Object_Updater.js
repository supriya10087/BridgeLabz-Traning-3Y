// Q8: Dynamic Object Updater
// The form updates the user object and displays the latest object values.

const user = {
    name: "John",
    email: "john@gmail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const userDetails = document.getElementById("userDetails");

// Display the initial values.
document.getElementById("userName").value = user.name;
document.getElementById("userEmail").value = user.email;
document.getElementById("userAge").value = user.age;
showUserDetails();

userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Update the existing object from the form values.
    user.name = document.getElementById("userName").value.trim();
    user.email = document.getElementById("userEmail").value.trim();
    user.age = Number(document.getElementById("userAge").value);

    showUserDetails();
});

function showUserDetails() {
    userDetails.textContent = JSON.stringify(user, null, 2);
}
