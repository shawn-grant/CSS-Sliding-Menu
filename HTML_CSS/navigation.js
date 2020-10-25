function openPage(id){
    var pages = document.getElementsByClassName('page');

    Array.from(pages).forEach((page) => {
        // Do stuff here
        if (page.id == id)
            page.style.display = "block";
        else
            page.style.display = "none";
    });
}
openPage('home-page');