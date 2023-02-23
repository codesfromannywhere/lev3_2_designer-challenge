console.log("running");


const email = document.querySelector('form input[type="email"]');
const confirmationPage = document.querySelector("#confirmation_pg");
const form = document.querySelector ("#subscribe_form")
// console.log(email);
// console.log(confirmationPage);


function subscribe () {
    // console.log(email.value === "elaine@super-code.de")
    if (email.value === "elaine@super-code.de") {
        form.style.display = "none"
    confirmationPage.style.display = "block"
    }
}

function goBack() {
    confirmationPage.style.display = "none"
    form.style.display = "block"
}