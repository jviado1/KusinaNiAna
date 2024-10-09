let message = document.getElementById("thank-you"); // this pops up when the submit button is pressed--when the form is verified

let form = document.getElementById("form");
// This was bad practice because it did two functions in one, but it has been too long since I did javascript, but I made it work in the end. This function formats the full name so it only says your first name , with the first letter capitalized in the thank you message when the form gets submitted. The other function is to stop the page from refreshing when the form is submitted. This was done with preventDefault().
form.addEventListener("submit", function(event) {
    let fullName = document.getElementById("name").value;
    let firstName = fullName.split(" ");
    firstName = firstName[0].toLowerCase();
    let formattedFirstName= firstName[0].toUpperCase() + firstName.slice(1);
    event.preventDefault();
    form.reset();
    message.style.display = "block";
    message.innerText = `Thank you, ${formattedFirstName}! We will contact you shortly🫶`;
})
let button = document.getElementById("contact-button");
// This was a simple function for the contact buttons seen on the Home and Services page. When clicked, it takes you to the contact page.
button.addEventListener("click", function () {
    location.href = "./contacts.html";
});
