const formContainer = document.querySelector(".form__container");
const addButton = document.querySelector("add-btn");

addButton.addEventListener("click", function() {
    formContainer.classList.toggle("dnone");
})

formContainer.addEventListener("click", function() {
    formContainer.style.display = "none";
})