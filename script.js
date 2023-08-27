let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    if (e.target["password"] !== e.target["confirm_password"]) {
        console.error("password difference");
        e.preventDefault();
    }
});
