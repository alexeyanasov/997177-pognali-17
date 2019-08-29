var form = document.querySelector(".help__form");
var inp = form.querySelector('.help__form-email')
var email = form.querySelector("[name=email]");
var err = form.querySelector("[placeholder=E-mail]");


form.addEventListener("submit", function(evt) {
    if (!email.value)
    evt.preventDefault();
    err.placeholder = "Введите e-mail";
    inp.classList.add("help__form-email--err");
});
