let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    if (e.target["password"] !== e.target["confirm_password"]) {
        alert("Passwords do not match");
        e.preventDefault();
    }
});
