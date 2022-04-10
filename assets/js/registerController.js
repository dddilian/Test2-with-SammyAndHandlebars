//register buttons
let registerBtn = document.getElementById("registerBtn");
let goToLoginBtn = document.getElementById("goToLoginBtn");

//register form inputs
let usernameRegisterInput = document.getElementById("registerUsername");
let passwordRegisterInput = document.getElementById("regPassword1");
let rePasswordRegisterInput = document.getElementById("regPassword2");

let regErrorP = document.getElementById("regError");
regErrorP.style.display = 'none';
logErrorP.style.display = "none";

//event-ите в текущия контролер:
//register event
registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    regErrorP.style.display = 'none';

    let username = usernameRegisterInput.value.trim();
    let password = passwordRegisterInput.value.trim();
    let rePassword = rePasswordRegisterInput.value.trim();

    if (username === "") {
        regErrorP.innerText = "Username can't be blank!";
        regErrorP.style.display = 'block';
    } else if (password !== rePassword || password == "" || rePassword == "") { //ако паролите не са еднакви - error за различни пароли
        regErrorP.innerText = "Passwords don't match!";
        regErrorP.style.display = 'block';
    } else if (userStorage.existsUser(usernameRegisterInput.value)) { //ако съществува такъв юзър - error за existing user
        regErrorP.innerText = "User already exists";
        regErrorP.style.display = 'block';
    } else { //ако не съществува такъв юзър - ще го създадем
        userStorage.addUser(username, password);
        regErrorP.style.display = 'none';
    }

});

//go to login event
goToLoginBtn.addEventListener('click', (e) => {
    e.preventDefault(); // винаги при SPA приложение preventDefault() за клик евента на събмит бутона във форма

    //скриваме Register страницата
    registerPage.style.display = "none";
    //показваме Login страницата
    loginPage.style.display = "block";

    //зачистваме ипутите
    usernameRegisterInput.value = "";
    passwordRegisterInput.value = "";
    rePasswordRegisterInput.value = "";
    regErrorP.style.display = 'none';
});