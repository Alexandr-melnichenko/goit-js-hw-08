const getForm = document.querySelector("form.login-form");

const handlForm = event => {
    event.preventDefault();
    const emailEl = event.target.elements.email;
    const passwordEl = event.target.elements.password;

    if (emailEl.value.trim() === "" || passwordEl.value.trim() === "") {
        return alert('All form fields must be filled in');
     }

     const data = {
    email: emailEl.value.trim(),
    password: passwordEl.value.trim()
}
console.log("Data:", data);

getForm.reset();
}

getForm.addEventListener("submit", handlForm);