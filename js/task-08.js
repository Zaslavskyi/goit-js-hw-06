const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповнені!");
    };
    
    const inputValue = {
        email: email.value,
        password: password.value
    }
    console.log(inputValue);

    event.target.reset();
});