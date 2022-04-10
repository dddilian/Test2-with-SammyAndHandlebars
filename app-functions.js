// function addToFav(e) {
//     // console.log(e);
//     // console.log(e.target.dataset.id);
//     let user = userManager.getUser();
//     if (!userManager.recepieIsLiked(user, e.target.dataset.id)) {
//         e.target.innerText = "Премахни от любими";
//         user.favoriteRecepies.push(recepiesManager.allRecepies.find(rec => rec.id == e.target.dataset.id));
//         //ъпдейтвай състоянието на юзъра в localStorage след всяка промяна на нещо по него, иначе не се запомня
//         userManager.updateUser(user);

//         console.log(user.favoriteRecepies);
//     }
// }

// function removeFromFav(e) {
//     // console.log(e);
//     // console.log(e.target.dataset.id);
//     let user = userManager.getUser();
//     //ако рецептата е лайкната от конкретния юзър
//     if (userManager.recepieIsLiked(user, e.target.dataset.id)) {
//         //разкарай я
//         userManager.removeFromFavorites(user, e.target.dataset.id);
//         if (location.hash == "#favRecepies") {
//             e.target.parentElement.parentElement.remove();
//         } else {
//             e.target.textContent = "Добави в любими";
//         }

//         //ъпдейтвай състоянието на юзъра в localStorage след всяка промяна на нещо по него, иначе не се запомня
//         userManager.updateUser(user);

//         console.log(user.favoriteRecepies);
//     }
// }

function addOrRemove(e) {
    let user = userManager.getUser();


    //Ако рецептата не е в любими
    if (!userManager.recepieIsLiked(user, e.target.dataset.id)) {
      
        //добави я в любими
        user.favoriteRecepies.push(recepiesManager.allRecepies.find(rec => rec.id == e.target.dataset.id));

        //промени текста на бутона
        e.target.textContent = "Премахни от любими";

        //ъпдейтвай състоянието на юзъра в localStorage след всяка промяна на нещо по него, иначе не се запомня
        userManager.updateUser(user);
    }

    //Ако рецептата е в любими
    else if (userManager.recepieIsLiked(user, e.target.dataset.id)) {
      
        //разкарай я от любими
        userManager.removeFromFavorites(user, e.target.dataset.id);

        //в зависимост от това къде се намираме
        if (location.hash == "#favRecepies") {
            //премахни целия елемент, ако сме на страницата favRecepies
            e.target.parentElement.parentElement.remove();
        } else {
            //ако сме в главната страница, просто промени текста
            e.target.textContent = "Добави в любими";
        }

        //ъпдейтвай състоянието на юзъра в localStorage след всяка промяна на нещо по него, иначе не се запомня
        userManager.updateUser(user);

    }

}