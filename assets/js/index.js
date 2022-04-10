(function () {




    //!Filter by ingredient function
    selectEl.addEventListener('change', (e) => {
        // console.log(e.target.value); //the ingredient
        let filteredRecepies = recepiesManager.filterIngredient(e.target.value);
        if (location.hash === "#allRecepies") {
            printElements(filteredRecepies, allRecepiesEl);
        } else if (location.hash === "#favRecepies") {
            printElements(filteredRecepies, favRecepies);
        }
    });

   

    let searchNameInput = document.getElementById('searchNameInput');
    //!Filter by name function
    searchNameInput.addEventListener("keyup", (e) => {
        // console.log(e.target.value);
        let filteredRecepies = recepiesManager.filterName(e.target.value);
        if (location.hash === "#allRecepies") {
            printElements(filteredRecepies, allRecepiesEl);
        } else if (location.hash === "#favRecepies") {
            printElements(filteredRecepies, favRecepies);
        }
    });
    //!---------------------------------------------------------------

    let searchDiv = document.getElementById("searchDiv");
    let profileSubmitButton = document.getElementById('profileSubmitBtn');
    let createNewRecepieButton = document.getElementById("addRecepieBtn");

    //!Create and add new recepie to recepiesManager all recepies
    // createNewRecepieButton.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     let inputs = Array.from(document.querySelectorAll(".newRecInput")).map(el => el.value); //взимаме наведнъж всички инпут+text area елементи от формата
    //     // console.log(inputs);

    //     let newRecepie = new Recepie(...inputs);
    //     recepiesManager.add(newRecepie);

    //     //зачистване на полетата след създаване на нова рецепта

    //     Array.from(document.querySelectorAll(".newRecInput")).forEach(input => {
    //         input.value = '';
    //     })
    // })

    //!Change profile info
    // profileSubmitButton.addEventListener('click', function (e) {
    //     e.preventDefault();

    //     let usernameNew = document.getElementById("username").value;
    //     let userAgeNew = document.getElementById("userAge").value;
    //     let userAddressNew = document.getElementById("userAddress").value;
    //     let userProfilePicNewSrc = document.getElementById("profileImage").value;

    //     if (!usernameNew || !userAgeNew || !userAddressNew || !userProfilePicNewSrc) {
    //         let errorDiv = document.getElementById("alertDiv");
    //         // console.log(errorDiv);
    //         errorDiv.style.display = "block";
    //         setTimeout(() => {
    //             errorDiv.style.display = "none";
    //         }, 3000);
    //         return;
    //     }

    //     user.name = document.getElementById("username").value;
    //     userAgeEl = document.getElementById("userAge").value;
    //     userAddressEl = document.getElementById("userAddress").value;

    //     document.getElementById("profilePic").src = document.getElementById("profileImage").value;
    // })


    // //!Make array from ingregients SET. Traverse the all ingredients array to create option element and append it to select element
    Array.from(allIngrediensOptions).forEach(ingredient => {
        let option = document.createElement('option');
        option.innerText = ingredient;
        selectEl.appendChild(option);
    })

    // //!Show Page
    // function showPage(e) {
    //     //при първоначално зареждане, когато hash реално ни е празен стринг ''
    //     if (location.hash == '') {
    //         location.hash = "#allRecepies";
    //     }

    //     let hash = location.hash.slice(1);

    //     switch (hash) {
    //         case "allRecepies":
    //             allRecepiesEl.style.display = "flex";
    //             favRecepies.style.display = "none";
    //             createRecepie.style.display = "none";
    //             myProfile.style.display = "none";
    //             errorPage.style.display = "none";
    //             searchDiv.style.display = "flex";

    //             register.style.display = "none";
    //             login.style.display = "none";
    //             printElements(recepiesManager.allRecepies, allRecepiesEl);
    //             break;
    //         case "favRecepies":
    //             allRecepiesEl.style.display = "none";
    //             favRecepies.style.display = "flex";
    //             createRecepie.style.display = "none";
    //             myProfile.style.display = "none";
    //             errorPage.style.display = "none";
    //             searchDiv.style.display = "flex";

    //             register.style.display = "none";
    //             login.style.display = "none";
    //             printElements(user.favoriteRecepies, favRecepies);
    //             break;
    //         case "createRecepie":
    //             allRecepiesEl.style.display = "none";
    //             favRecepies.style.display = "none";
    //             createRecepie.style.display = "flex";
    //             myProfile.style.display = "none";
    //             errorPage.style.display = "none";
    //             searchDiv.style.display = "none";

    //             register.style.display = "none";
    //             login.style.display = "none";
    //             break;
    //         case "myProfile":
    //             allRecepiesEl.style.display = "none";
    //             favRecepies.style.display = "none";
    //             createRecepie.style.display = "none";
    //             myProfile.style.display = "flex";
    //             errorPage.style.display = "none";
    //             searchDiv.style.display = "none";
    //             showCoockedRecepies(user.coockedRecepies);
    //             break;
    //         case "register":
    //             allRecepiesEl.style.display = "none";
    //             favRecepies.style.display = "none";
    //             createRecepie.style.display = "none";
    //             myProfile.style.display = "none";
    //             errorPage.style.display = "none";
    //             searchDiv.style.display = "none";
    //             login.style.display = "none";
    //             register.style.display = "flex";
    //             break;
    //         case "login":
    //             allRecepiesEl.style.display = "none";
    //             favRecepies.style.display = "none";
    //             createRecepie.style.display = "none";
    //             myProfile.style.display = "none";
    //             errorPage.style.display = "none";
    //             searchDiv.style.display = "none";
    //             register.style.display = "none";
    //             login.style.display = "flex";
    //             break;
    //         default:
    //             allRecepiesEl.style.display = "none";
    //             favRecepies.style.display = "none";
    //             createRecepie.style.display = "none";
    //             myProfile.style.display = "none";
    //             errorPage.style.display = "flex";
    //             searchDiv.style.display = "none";

    //             register.style.display = "none";
    //             login.style.display = "none";
    //             errorMessage();
    //             break;
    //     }

    // }

    // // //!Print elements (recepies)
    // function printElements(elements, container) {

    //     //!Преди всяко викане контейнерът трябва да се зачисти, иначе става дуплициране на съдържание
    //     container.innerHTML = '';

    //     //!Създаване на темплейта
    //     let templateSource = document.getElementById("recepie-template").innerHTML;
    //     let template = Handlebars.compile(templateSource);

    //     //!пълнене на съдържание, чрез темплейт
    //     elements.forEach(el => {
    //         let newEl = {
    //             // isLiked: user.favoriteRecepies.some(recepie => recepie.id === el.id), //проверка дали е във favorites
    //             isLiked: recepieIsLiked(user, el.id), //проверка дали е във favorites
    //             ...el
    //         }

    //         let recepieHTML = template(newEl);
    //         container.innerHTML += recepieHTML;
    //     });

    //     let allFavBtns = document.querySelectorAll(".addFavBtn"); //!бутоните за любими са с брой, равен броя на елементите и би трябвало да са в същата поредност
    //     let allCookBtns = document.querySelectorAll(".cookBtn"); //!бутоните зя сготви са с брой, равен на броя ня елементите и би трябвало да са в същата поредност



    //     allFavBtns.forEach(addToFavBtn => {

    //         addToFavBtn.addEventListener("click", function (e) {
    //             let clickedRecepieId = e.currentTarget.dataset.id; //!Ползваме поленце data-id от темплейта, в което е вкарано id-то на рецептата, по което я намираме
    //             //console.log(e.currentTarget.dataset.id);

    //             if (user.favoriteRecepies.findIndex(rec => rec.id == clickedRecepieId) == -1) { //ако рецептата не е в любими
    //                 let recepie = recepiesManager.allRecepies.find(rec => rec.id == clickedRecepieId);
    //                 // user.favoriteRecepies.push(recepie);+
    //                 addToFavorites(user, recepie);
    //                 e.currentTarget.textContent = 'Премахни от любими';
    //             } else {
    //                 // let idxOfLikedRecepieToBeRemoved = user.favoriteRecepies.findIndex(rec => rec.id == clickedRecepieId);
    //                 // user.favoriteRecepies.splice(idxOfLikedRecepieToBeRemoved, 1); //remove from user favorite recepies arr
    //                 removeFromFavorites(user, clickedRecepieId);
    //                 e.currentTarget.textContent = "Добави в любими";

    //                 if (location.hash == "#favRecepies") { //това е, за да бачка и в страницата с любими
    //                     e.target.parentElement.parentElement.remove(); //remove the DOM element from favRecepies page
    //                 }

    //             }
    //             // console.log(user.favoriteRecepies);
    //         })

    //     });

    //     allCookBtns.forEach(cookBtn => {

    //         cookBtn.addEventListener("click", function (e) {
    //             let clickedRecepieId = e.currentTarget.dataset.id;
    //             let cookedRecepie = recepiesManager.allRecepies.find(rec => rec.id == clickedRecepieId); //намираме коя точно е рецептата, която сме избрали да сготвим
    //             addToCookedRecepies(user, cookedRecepie);
    //         })

    //     });

    // };



    //!Error page redirect after 5 seconds
    function errorMessage() {

        let timeEl = document.getElementById("timeEl");
        timeEl.textContent = '';
        timeEl.style.color = "white";
        let seconds = 5;

        let time = setInterval(takeTime, 1000);

        function takeTime() {
            timeEl.textContent = `${seconds}`;
            seconds--;
            if (seconds == 0) {
                clearInterval(time);
                location.hash = "#allRecepies";
            }
        }
    }


    //!Зареди сготвените рецепти и също така, попълни полетата за промяна на данните на юзъра с текущите данни
    function showCoockedRecepies(coockedRecepies) {
        let usernameEl = document.getElementById("username");
        let userAgeEl = document.getElementById("userAge");
        let userAddressEl = document.getElementById("userAddress");
        let profileImageEl = document.getElementById("profileImage");

        usernameEl.value = user.name;
        userAgeEl.value = user.age;
        userAddressEl.value = user.address;

        let table = document.getElementById("coockedRecepiesTable");
        table.innerHTML = "";

        for (const recepieTitle in coockedRecepies) {
            let tr = document.createElement("tr");

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');

            td1.textContent = recepieTitle;
            td2.textContent = coockedRecepies[recepieTitle];

            tr.append(td1, td2);
            table.appendChild(tr)
        }
    }



})();


//!Всички функции, които преди бяха в клас User и не работиха след десериализация от localStorage JSON към обект
function addToFavorites(user, recepie) {
    if (!user.favoriteRecepies.some(rece => rece.id === recepie.id)) { //ако не се съдържа
        user.favoriteRecepies.push(recepie); //добави я в любими
    }
}

function removeFromFavorites(user, id) {
    let idx = user.favoriteRecepies.findIndex(rec => rec.id == id);
    user.favoriteRecepies.splice(idx, 1);
}

function recepieIsLiked(user, id) { //приема юзъра и id-то на текущата рецепта и търси резепта в любимите със същото id
    return user.favoriteRecepies.some(recepie => recepie.id === id)
}

function addToCookedRecepies(user, recepie) {
    //*this.cookedRecepies e обект
    if (user.coockedRecepies[recepie.title]) { //ако резептата е готвена поне веднъж, увеличи стойноста 
        user.coockedRecepies[recepie.title]++;
    } else {
        user.coockedRecepies[recepie.title] = 1; //ако резептата досега не е готвена, създай такова пръпрти със стойност 1
    }
}