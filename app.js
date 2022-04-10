const router = Sammy("#wrapper", function () {

    this.use("Handlebars", "hbs");

    //GET ------------------------------------------------------------------------------------------------------------

    //allRecepies page get
    this.get("#allRecepies", function (context) {

        context.recepies = recepiesManager.allRecepies;
        context.recepies.forEach(rec => {
            rec.isLiked = false;
        })

        let user = userManager.getUser();
        if (user) {
            console.log(user);
            context.loggedIn = true;
            context.user = user;



            context.recepies.forEach(rec => {
                if (userManager.recepieIsLiked(user, rec.id)) {
                    rec.isLiked = true;
                }
            })

            console.log(user.favoriteRecepies);
        }


        console.log(context.recepies);
        context.ingredients = recepiesManager.getAllIngredients();


        this.loadPartials({
            "header": "./templates/header.hbs",
            "footer": "./templates/footer.hbs",
            "recepie": "./templates/recepie.hbs",
            "ingredient": "./templates/ingredient.hbs"
        }).then(function () {
            this.partial("./templates/allRecepies.hbs");

        })

    });

    //favRecepies page get
    this.get("#favRecepies", function (context) {

        let user = userManager.getUser();
        if (user) {
            context.loggedIn = true;
            context.user = user;
            let recepies = user.favoriteRecepies.map(rec => {
                rec.isLiked = true;
                return rec;
            })
            context.favRecepies = recepies;;
            context.ingredients = recepiesManager.getAllIngredients();
        }



        this.loadPartials({
            "header": "./templates/header.hbs",
            "footer": "./templates/footer.hbs",
            "recepie": "./templates/recepie.hbs",
            "ingredient": "./templates/ingredient.hbs"
        }).then(function () {
            this.partial("./templates/favRecepies.hbs");
        })

    });

    //create recepie get
    this.get("#createRecepie", function (context) {
        let user = userManager.getUser();
        if (user) {
            context.loggedIn = true;
            context.user = user;
        }

        this.loadPartials({
            "header": "./templates/header.hbs",
            "footer": "./templates/footer.hbs",
        }).then(function () {
            this.partial("./templates/createRecepie.hbs");
        })
    });

    //my profile get
    this.get("#myProfile", function (context) {
        let user = userManager.getUser();
        if (user) {
            context.loggedIn = true;
            context.user = user;
        }

        this.loadPartials({
            "header": "./templates/header.hbs",
            "footer": "./templates/footer.hbs",
        }).then(function () {
            this.partial("./templates/myProfile.hbs");
        })
    });

    //register page get
    this.get("#register", function (context) {
        this.loadPartials({
            "header": "./templates/header.hbs",
            "footer": "./templates/footer.hbs",
        }).then(function () {
            this.partial("./templates/registerPage.hbs");
        })
    });

    //login page get
    this.get("#login", function (context) {
        this.loadPartials({
            "header": "./templates/header.hbs",
            "footer": "./templates/footer.hbs",
        }).then(function () {
            this.partial("./templates/loginPage.hbs");
        })
    });

    //logout get
    this.get("#logout", function (context) {
        userManager.logout();

        setTimeout(() => {
            this.redirect("#allRecepies");
        }, 1000);

    });


    // this.get("#addToFav/:recepieId", function (context) {
    //     // console.log(context);
    //     document.getElementById(`add-${context.params.recepieId}`).innerText = "Премахни от любими";

    //     let user = userManager.getUser();
    //     if (user) {
    //         context.loggedIn = true;
    //         context.user = user;

    //         //Ако рецептата не е в любими на конкретния юзър
    //         if (!userManager.recepieIsLiked(user, context.params.recepieId)) {
    //             user.favoriteRecepies.push(recepiesManager.allRecepies.find(rec => rec.id == context.params.recepieId));
    //             //ъпдейтвай състоянието на юзъра в localStorage след всяка промяна на нещо по него, иначе не се запомня
    //             userManager.updateUser(user);
    //         }

    //     }

    // });

    // this.get("#removeFromFav/:recepieId", function (context) {
    //     // console.log(context);
    //     document.getElementById(`remove-${context.params.recepieId}`).innerText = "Добави в любими";

    //     let user = userManager.getUser();
    //     if (user) {
    //         context.loggedIn = true;
    //         context.user = user;

    //         //Ако рецептата е в любими на конкретния юзър
    //         if (userManager.recepieIsLiked(user, context.params.recepieId)) {
    //             //разкарай я
    //             userManager.removeFromFavorites(user, context.params.recepieId);
    //             if (location.hash == `#removeFromFav/${context.params.recepieId}`) {
    //                 document.getElementById(`remove-${context.params.recepieId}`).parentElement.parentElement.remove();
    //             }

    //             //ъпдейтвай състоянието на юзъра в localStorage след всяка промяна на нещо по него, иначе не се запомня
    //             userManager.updateUser(user);
    //         }

    //     }

    // });

    //cook recepie get
    // this.get("#cookRecepie/:recepieId", function (context) {
    //     console.log(context);

    //      let user = userManager.getUser();
    //     if (user) {
    //         context.loggedIn = true;
    //         context.user = user;
    //     }

    // })


    //POST --------------------------------------------------------------------------------------------------------------------

    this.post("#login", function (context) {

        const {
            loginUsername, //идва от name атрибута на input-а
            loginPassword, //идва от name атрибута на input-а
        } = context.params;

        if (loginUsername.trim() == "" || loginPassword.trim() == "") {
            window.alert("Empty fields");
            return;
        } else {
            userManager.login(loginUsername, loginPassword);
            this.redirect("#allRecepies");
        }

    })

});


//при първоначално стартиране на приложението, да се зареди стравицата #allRecepies
(() => {
    router.run("#allRecepies");
})();


function saveUserData(userData) {
    console.log(userData);
    // //const{ user:{email,uid}}= userData;

    // const {
    //     user
    // } = userData; //от целия обект userData си взимаме само пропъртито user, защото другото е много и е излишно

    // let {
    //     email,
    //     uid,
    // } = user; //взимаме си от user само id и email на юзъра, който се вписва, за да ги запаметим в localStorage

    // localStorage.setItem("currentUser", JSON.stringify({ //пъхаме логнатия потребител в localStorage, под формата на обект, който е във формат JSON
    //     email,
    //     uid
    // }))

}