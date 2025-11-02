const formEl = document.getElementById("form");
const inputEl = document.getElementById("email");
const errorTextEl = document.querySelector(".error-text");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const regEx = /^[\w.-]+@[\w.-]+\.[\w-]+$/;

    if (inputEl === "" || !regEx.test(inputEl.value)) {
        errorTextEl.classList.remove("hidden")
    } else {
        alert("Thank you! We'll get back to you!")
        inputEl.value = "";
    }
})

inputEl.addEventListener("input", () => {
    errorTextEl.classList.add("hidden")
})
