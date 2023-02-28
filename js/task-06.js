const validation = document.querySelector("#validation-input");
validation.addEventListener("blur", () => {
    validation.classList.toggle("valid", validation.value.length >= 6);
    validation.classList.toggle("invalid", validation.value.length < 6);
});
