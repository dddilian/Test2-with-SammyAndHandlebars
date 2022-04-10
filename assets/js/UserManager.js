let userManager = (function () {

    class UserManager {
        constructor() {}

        //!TO DO
        register(user) {
            userStorage.addUser(...Object.values(user))
        }

        //при логин
        login(username, password) {
            //ако юзъра си въведе правилно името и паролата
            if (userStorage.validUser(username, password)) {
                //вземи референцията към юзъра в userStorage масива
                let user = userStorage.getUser(username);
                //в същото време го сетни в localStorage
                localStorage.setItem("currentUser", JSON.stringify(user));
                // return user;
            }
        }

        logout() {
            let user = userManager.getUser();

            let idxOfUserInUsers = userStorage.users.findIndex(userIn => userIn.username == user.username);
            userStorage.users[idxOfUserInUsers]=user;
            //презапиши всички юзъри в localStorage, заедно с последно модифицирания, за да
            //може да се запази актуалното му състояние с всички промени по рецептите
            localStorage.setItem('users', JSON.stringify(userStorage.users));
            //след това разкарай от localStorage юзъра, с който последно е работено
            localStorage.removeItem("currentUser");
        }

        getUser() {
            return JSON.parse(localStorage.getItem("currentUser"));
        }

        updateUser(user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
        }


        //!Всички функции, които преди бяха в клас User и не работиха след десериализация от localStorage JSON към обект
        addToFavorites(user, recepie) {
            if (!user.favoriteRecepies.some(rece => rece.id === recepie.id)) { //ако не се съдържа
                user.favoriteRecepies.push(recepie); //добави я в любими
            }
        }

        removeFromFavorites(user, id) {
            let idx = user.favoriteRecepies.findIndex(rec => rec.id == id);
            user.favoriteRecepies.splice(idx, 1);
        }

        recepieIsLiked(user, recepieId) { //приема юзъра и id-то на текущата рецепта и търси рецепта в любимите със същото id
            return user.favoriteRecepies.some(recepie => recepie.id === recepieId)
        }

        addToCookedRecepies(user, recepie) {
            //*this.cookedRecepies e обект
            if (user.coockedRecepies[recepie.title]) { //ако резептата е готвена поне веднъж, увеличи стойноста 
                user.coockedRecepies[recepie.title]++;
            } else {
                user.coockedRecepies[recepie.title] = 1; //ако резептата досега не е готвена, създай такова пръпрти със стойност 1
            }
        }

    }


    return new UserManager();
})();