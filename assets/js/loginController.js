let loginBtn = document.getElementById("loginBtn");

//login form inputs
let logErrorP = document.querySelector("p.error"); //вземаме си p, което има клас error
logErrorP.style.display = "none";

let usernameLoginInput = document.getElementById("loginUsername");
let passwordLoginInput = document.getElementById("loginPassword");




//event-ите в текущия контролер:
//login event
loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); //понеже сме във форма и НЕ искаме при събмит да има refresh

    let username = usernameLoginInput.value.trim();
    let password = passwordLoginInput.value.trim();
console.log(username,password);
    if (userStorage.existsUser(username)) { //проверяваме дали изобщо има такъв регистриран юзър
        if (userStorage.validUser(username, password)) { //после проверяваме дали паролата му е вярна
            userManager.login(username, password);
            location.hash = "#allRecepies";
        } else {
            logErrorP.style.display = "block";
            return;
        }


    } else { //ако човекът не сществува, не може да се логне и трябва да се покаже error
        logErrorP.style.display = "block";
    }

});