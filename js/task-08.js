const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    const inputValue = {
        email: `${email.value}`,
        password: `${password.value}`
    }
    console.log(inputValue);

    if (email.value === "" || password.value === "") {
    window.alert("Усі поля повинні бути заповнені!");
    };
    
    event.target.reset();
});

// function onFormSubmit(event) {
   
   

    
    

//      const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> email', email);
//         console.log('onFormSubmit -> password', password);
//     })
// }

