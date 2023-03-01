const validation = document.querySelector("#validation-input");
validation.addEventListener("blur", () => {
    const result = (validation.value.length == validation.dataset.length);
    validation.classList.toggle("valid", result);
    validation.classList.toggle("invalid", !result);
});
